package com.horror_scope.demo.emails;

import com.horror_scope.demo.exception.Exceptions;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmailService{

    private EmailDAO emailDAO;
    private EmailValidator emailValidator;

    public EmailService (EmailDAO emailDAO){

        this.emailDAO = emailDAO;
    }

    public Optional<Email> getEmail(String email) {
        return emailDAO.selectEmailByEmail(email);
    }
    
    public void addEmail (String email, String zodiac){

        if (emailValidator.isValid(email)){
            emailDAO.insertEmail(email, zodiac);
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

    public EmailService() {
        //function for sending email to user
    }

    public boolean sendEmail(Email email) {
        //change email.getEmail() to email.getRecipient() once added in
        boolean valid = this.emailValidator.isValid(email.getEmail());
        return valid;
    }

}
