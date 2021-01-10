<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;
    /**
     * The table associated with the model
     */
    protected $table = 'my_photos';
    protected $primarykey = 'photo_id';

    protected $fillable =  [
        'name', 'location',
    ];
}

// Retrieve all of the records from model's associated database table
foreach (Photo::all() as $photo) {
    echo $photo->name;
}
