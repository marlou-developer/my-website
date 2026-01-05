<?php

namespace App\Models\POS;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PosStockMovement extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_stock_id',
        'user_id',
        'type',
        'reference',
        'qty_before',
        'qty_change',
        'qty_after',
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
