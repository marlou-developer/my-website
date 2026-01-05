<?php

namespace App\Models\POS;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PosCashTransaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'cash_register_id',
        'type',
        'amount',
        'reason'
    ];

    public function cash_register()
    {
        return $this->belongsTo(PosCashRegister::class);
    }
}
