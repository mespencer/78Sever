<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Auth;
use App;
use Carbon\Carbon;

class MessagesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
      header('Content-Type: application/json');
      $user = Auth::user();
      $results = array();
      foreach ($user->activeMessages()->all() as $key => $message) {
        $results[$key] = array();
        $results[$key]['id'] = $message->id;
        $results[$key]['text'] = $message->text;
        $results[$key]['removed'] = false;
        $results[$key]['priority'] = $message->priority;
        $results[$key]['createdBy'] = $message->createdBy->name;
        $results[$key]['seenBy'] = array();
        foreach ($message->seenBy() as $key => $value) {
          $results[$key]['seenBy'][$key] = $value->name;
        }
      }

      echo json_encode($results);
    }

    public function store(Request $request)
    {
      $input = $request->input('value');
      $output = array();
      foreach ($input as $key => $value) {
        $output[snake_case($key)] = $value;
      }
      $output['created_by'] = Auth::user()->id;
      $output['active_for'] = App\Message::groupByName($output['active_for']);
      App\Message::create($output);
    }

    public function destroy(Request $request, App\Message $message)
    {
      $activeFor = explode(' ', $message->active_for);
      unset($activeFor[array_search(Auth::user()->id, $activeFor)]);
      $message->active_for = implode(' ', $activeFor);
      $message->save();
    }

    public function seen(Request $request, App\Message $message)
    {

      if(strpos($message->seen_by, ' ') == false)
      {
        $message->seen_by = strval(Auth::user()->id);
      }
      else
      {
        $message->seen_by = $message->seen_by.' '.strval(Auth::user()->id);
      }
      if(strpos($message->seen_on, ',') == false)
      {
        $message->seen_on = strval(Carbon::now());
      }
      else
      {
        $message->seen_on = $message->seen_on.','.strval(Carbon::now());
      }

      $message->save();
    }
}
