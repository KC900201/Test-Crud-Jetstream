<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;

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

Route::redirect('/', '/en');
// Route::redirect('/', '/ja');

Route::group(['prefix' => '{language}'], function(){

    Route::get('/', function() {
        return view('welcome');
    });

    Route::get('/about', [HomeController::class, 'about'])->name('about');
    Route::get('/contact', [HomeController::class, 'contact'])->name('contact');

});

// Route::get('/', function () {
//     return view('welcome');
// });

// region locale
Route::post('/set-locale/{locale}', 'LocaleController@setLocale')->name('set-locale');
// end region

// Route::get('/', [HomeController::class, 'index'])->name('home');
// Route::get('/about', [HomeController::class, 'about'])->name('about');
// Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
// Route::get('/login', [HomeController::class, 'login']);

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
    // return Inertia\Inertia::render('DashboardNew');
})->name('dashboard');

// Route::middleware(['auth:sanctum', 'verified'])->get('/about', function() {
//     return Inertia\Inertia::render('About');
// })->name('about');

// Route::middleware(['auth:sanctum', 'verified'])->get('/contact', function() {
//     return Inertia\Inertia::render('Contact');
// })->name('contact');

Route::resource('users', UserController::class);
