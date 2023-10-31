<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable = [
        'comment',
        'user_id',
        'package_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class , 'user_id');
    }
    public function package()
    {
        return $this->belongsTo(Package::class , 'package_id');
    }
}
