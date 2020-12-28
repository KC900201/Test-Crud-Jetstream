<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    //Page redirect
    public function index(){
        return Inertia::render('Home');
    }

    public function about() {
        return Inertia::render('About');
    }

    public function contact() {
        return Inertia::render('Contact');
    }
}
