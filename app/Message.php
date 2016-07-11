<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    public function createdBy()
    {
      return $this->belongsTo('App\User', 'created_by');
    }

    public function seenBy()
    {
      $ids = explode(" ", $this->seen_by);
      $users = array();

      if($ids[0] != "") {
        foreach ($ids as $key => $value) {
          $users[$key] = User::where('id', $value)->orderBy('name', 'desc')->get();
        }
      }

      return $users;
    }
}
