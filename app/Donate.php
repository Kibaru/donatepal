<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Donate extends Model
{
    protected $fillable = ['name','email', 'phone', 'amount', 'period', 'status', 'transactionid',];
}
