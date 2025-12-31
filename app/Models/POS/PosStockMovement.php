<?php

namespace App\Models\POS;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PosStockMovement extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'quantity',
        'type',
        'reason',
        'location_from',
        'location_to',
        'user_id'
    ];

    public function product()
    {
        return $this->belongsTo(PosProduct::class);
    }

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }
}
