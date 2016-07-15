<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Message extends Model
{
    use SoftDeletes;
    
    protected $fillable = array('text', 'active_for', 'priority', 'created_by');

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

    public static function groupByName($name)
    {
      $output = '';
      switch ($name) {
        case 'all':
        default:
          $output = implode(' ', User::lists('id')->all());
          break;
      }

      return $output;
    }
}
