package com.horror_scope.demo.emails;

public class EmailValidator {
    public EmailValidator() {

    }

    public boolean isValid(String recipient) {
        boolean result = true;
        if (recipient.matches( "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"))
        {
            result= true;
        } else {
            result = false;
        }
        return result;
    }
}





