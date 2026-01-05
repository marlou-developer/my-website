<?php

namespace App\Models\POS;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PosCustomer extends Model
{
    use HasFactory;

    protected $fillable = [
        'subscriber_id',
        'name',
        'phone',
        'email',
        'address'
    ];

    public function sales()
    {
        return $this->hasMany(PosSale::class);
    }
}
