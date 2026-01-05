<?php

namespace App\Models\API\POS;

use Illuminate\Database\Eloquent\Model;

class PosSubscriber extends Model
{
    protected $fillable = [
        'email',
        'name',
    ];
}
