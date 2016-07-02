<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShoppingList extends Model
{
    public function items()
    {
      return $this->hasMany('App\Item', 'shopping_list');
    }
}
