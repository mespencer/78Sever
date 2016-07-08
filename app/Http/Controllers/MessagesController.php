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
      $user = Auth::user();
      var_dump($user->activeMessages()->all());
    }
}
