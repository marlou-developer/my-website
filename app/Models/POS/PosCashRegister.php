<?php

namespace App\Models\POS;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PosCashRegister extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'opening_balance', 'closing_balance', 'status'];

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }

    public function transactions()
    {
        return $this->hasMany(PosCashTransaction::class);
    }
}
