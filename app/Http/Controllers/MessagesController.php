<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Auth;

class MessagesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function jsonList()
    {
      header('Content-Type: application/json');
      $user = Auth::user();
      $results = array();
      foreach ($user->activeMessages()->all() as $key => $message) {
        $results[$key] = array();
        $results[$key]['id'] = $message->id;
        $results[$key]['text'] = $message->text;
        $results[$key]['removed'] = false;
        $results[$key]['createdBy'] = $message->createdBy->name;
        $results[$key]['seenBy'] = array();
        foreach ($message->seenBy() as $key => $value) {
          $results[$key]['seenBy'][$key] = $value->name;
        }
      }

      echo json_encode($results);
    }
}
