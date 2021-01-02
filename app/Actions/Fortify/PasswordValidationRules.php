<?php

namespace App\Actions\Fortify;

use Laravel\Fortify\Rules\Password;

trait PasswordValidationRules
{
    /**
     * Get the validation rules used to validate passwords.
     *
     * @return array
     */
    protected function passwordRules()
    {
        // Change minimum length to 10 (12/15/2020)
        return ['required', 'string', (new Password)->requireNumeric()->length(6), 'confirmed'];
    }
}
