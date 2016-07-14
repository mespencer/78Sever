<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::auth();

Route::get('/', 'PageController@index');
Route::get('/message-board', 'PageController@index');
Route::get('/chores', 'PageController@index');
Route::get('/shopping-list', 'PageController@index');
Route::get('/settings', 'PageController@index');

Route::resource('message', 'MessagesController', ['except' => ['create', 'edit']]);
