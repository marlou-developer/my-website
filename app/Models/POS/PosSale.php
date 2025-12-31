<?php

namespace App\Models\POS;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PosSale extends Model
{
    use HasFactory;

    protected $fillable = [
        'invoice_no',
        'customer_id',
        'user_id',
        'total_amount',
        'discount',
        'tax',
        'amount_paid',
        'change_due',
        'payment_type',
        'status'
    ];

    public function customer()
    {
        return $this->belongsTo(PosCustomer::class);
    }

    public function sale_items()
    {
        return $this->hasMany(PosSalesItem::class, 'sale_id');
    }

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }
}
