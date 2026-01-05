<?php

namespace App\Models\POS;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PosPurchaseItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'purchase_id',
        'product_id',
        'quantity',
        'cost_price',
        'subtotal'
    ];

    public function purchase()
    {
        return $this->belongsTo(PosPurchase::class, 'purchase_id');
    }

    public function product()
    {
        return $this->belongsTo(PosProduct::class);
    }
}
