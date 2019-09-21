<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Permissions\HasPermissionsTrait;

class Permission extends Model
{
    use HasPermissionsTrait;

    protected $table = 'permissions';
}
