<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Permissions\HasPermissionsTrait;

class Role extends Model
{
    use HasPermissionsTrait;
    protected $table = 'roles';
}
