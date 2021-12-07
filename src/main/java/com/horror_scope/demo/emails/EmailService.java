package com.horror_scope.demo.emails;

public class EmailService{

    private EmailDAO emailDAO;
    private EmailValidator emailValidator;

    public EmailService (EmailDAO emailDAO){

        this.emailDAO = emailDAO;
    }

    public void addEmail (String email, String zodiac){
        boolean valid = emailValidator.isValid(email)
                .orElseThrow(() =>
                            new ResourseNotFound("Email is not valid!");
        );
        if (emailValidator.isValid(email)){
            emailDAO.insertEmail(email, zodiac);
        } else {
            t
        }

    }

    public void deleteEmail (String email){
        emailDAO.deleteEmail(email);
    }

    public EmailService() {
        //function for sending email
    }

    public boolean sendEmail(Email email) {
        //change email.getEmail() to email.getRecipient() once added in
        boolean valid = this.emailValidator.isValid(email.getEmail());
        return valid;
    }

}
