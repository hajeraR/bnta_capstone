package com.horror_scope.demo.emails;

import com.horror_scope.demo.exception.Exceptions;
import org.springframework.stereotype.Service;

@Service
public class EmailService{

    private EmailDAO emailDAO;
    private EmailValidator emailValidator;

    public EmailService (EmailDAO emailDAO){

        this.emailDAO = emailDAO;
    }

    public void addEmail (String email, String zodiac){

        if (emailValidator.isValid(email)){
            emailDAO.insertEmail(email, zodiac);
        } else {
            throw new Exceptions("Email is not valid");
        }

    }

    public void deleteEmail (String email){
        emailDAO.deleteEmail(email);
    }

    public EmailService() {
        //function for sending email to user
    }

    public boolean sendEmail(Email email) {
        //change email.getEmail() to email.getRecipient() once added in
        boolean valid = this.emailValidator.isValid(email.getEmail());
        return valid;
    }

}
