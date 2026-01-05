<?php

namespace App\Models\POS;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PosProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'unit_id',
        'category_id',
        'barcode',
        'name',
        'image'
    ];


    public function category()
    {
        return $this->belongsTo(PosCategory::class);
    }

    public function unit()
    {
        return $this->belongsTo(PosUnit::class);
    }

    public function stocks()
    {
        return $this->hasMany(PosProductStock::class);
    }

    public function purchaseItems()
    {
        return $this->hasMany(PosPurchaseItem::class);
    }

    public function saleItems()
    {
        return $this->hasMany(PosSalesItem::class);
    }
}
