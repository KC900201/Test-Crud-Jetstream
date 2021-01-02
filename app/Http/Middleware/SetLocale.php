<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // use locale stored in session if available
        $locale = session()->get('locale');
        if (isset($locale)) {
            app()->setLocale($locale);
        } else {
            app()->setLocale($request->language);
        }
        // \App::setLocale($request->language);
        URL::defaults(['locale' => $locale]);
        return $next($request);
    }
}
