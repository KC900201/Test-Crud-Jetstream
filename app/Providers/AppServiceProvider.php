<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Queue;
use Illuminate\Queue\Events\JobFailed;
use Inertia\Inertia;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Perform data sharing between pgs
        Inertia::share('app.name', config('app.name'));
        Inertia::share('errors', function(){
            return session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() :
            (object) [];
        });
        Inertia::share([
            'locale' => function() {
                return app()->getLocale();
            },
        ]);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Job failed notification function
        Queue::failing(function (JobFailed $event) {
            // $event->connectionName
            // $event->job
            // $event->exception
        });
    }
}
