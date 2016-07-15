<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function messages()
    {
      return $this->hasMany('App\Message', 'created_by');
    }

    public function activeMessages()
    {
      return Message::where('active_for', 'LIKE', $this->id)->orderBy('created_at', 'desc')->get();
    }

    public function shoppingLists()
    {
      return $this->hasMany('App\ShoppingList', 'created_by');
    }

    public function items()
    {
      return $this->hasMany('App\Item', 'created_by');
    }
}
