<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::post('/donate', [
//     'uses' => 'DonationController@donate',
//     'as' => 'donate',
// ]);

// Route::get('/success', [
//     'uses' => 'DonationController@success',
//     'as' => 'success',
// ]);

// Route::get('/consumer', function () {
//     return view('pages.keys');
// });

// Route::post('/consumer', [
//     'uses' => 'DonationController@consumer',
//     'as' => 'consumer',
// ]);

Route::view('/{path?}', 'index');
