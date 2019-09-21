<?php
namespace App\Permissions;
use App\Permission;
use App\Role;

trait HasPermissionsTrait
{
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'users_roles');
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'users_permissions');
    }

    public function rolePermission()
    {
        return $this->belongsToMany(Role::class, 'roles_permissions');
    }

    public function permissionRole()
    {
        return $this->belongsToMany(Permission::class, 'roles_permissions');
    }

    public function hasRole(...$roles)
    {
        foreach($roles as $role)
        {
            if($this->roles->contains('slug', $role))
            {
                return true;
            }
        }
        return false;
    }

    /** 1 user co the lay quyen thong qua vai tro */
    public function hasPermissionThroughRole($permission)
    {
        foreach($permission->rolePermission as $role)
        {
            if($this->roles->contains($role))
            {
                return true;
            }
        }
        return false;
    }

    public function hasPermissionTo($permission)
    {
        return $this->hasPermissionThroughRole($permission) || $this->hasPermission($permission);
    }

    public function getAllPermissions($permissions)
    {
        return Permission::whereIn('slug', $permissions)->get();
    }

    public function givePermissionsTo(... $permissions)
    {
        $permissions = $this->getAllPermissions($permissions);

        if($permissions === null)
        {
           return $this;
        }
        $this->permissions()->saveMany($permissions);
        return $this;
    }

    public function deletePermissions(...$permissions)
    {
        $permissions = $this->getAllPermissions($permissions);
        $this->permissions()->detach($permissions);
        return $this;
    }

    public function hasPermission($permission)
    {
        return (bool) $this->permissions->where('slug', $permission->slug)->count();
    }
}
