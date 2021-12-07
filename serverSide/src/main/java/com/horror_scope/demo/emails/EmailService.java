package com.horror_scope.demo.emails;

import com.horror_scope.demo.exception.Exceptions;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmailService{

    private EmailDAO emailDAO;

    public EmailService (EmailDAO emailDAO ){

        this.emailDAO = emailDAO;
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

    public Optional<Email> getEmail(String email) {
        return emailDAO.selectEmailByEmail(email);
    }

    public void addEmail (String email, String zodiacSign){

        if (isValid(email)){
            emailDAO.insertEmail(email, zodiacSign);
        } else {
            throw new Exceptions("Email is not valid");
        }

    }

    public void deleteEmail (String email){
        Optional<Email> checkEmail = emailDAO.selectEmailByEmail(email);

        if(checkEmail.isEmpty()){
            throw new Exceptions("Email not found");
        }
        emailDAO.deleteEmail(email);
    }

//    public EmailService() {
//        //function for sending email to user
//    }

//    public boolean sendEmail(Email email) {
//        //change email.getEmail() to email.getRecipient() once added in
//        boolean valid = this.emailValidator.isValid(email.getEmail());
//        return valid;
//    }

}
