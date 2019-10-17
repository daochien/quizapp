<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\User;

class Media extends Model
{
    use SoftDeletes;

    protected $table = 'medias';

    protected $fillable = ['name', 'path', 'extension', 'path_cover', 'user_id'];

    public $timestamps = true;

    protected $dates = ['deleted_at'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
