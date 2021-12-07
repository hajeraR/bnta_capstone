package com.horror_scope.demo.emails;

public class EmailService implements EmailDAO{

    private EmailDAO emailDAO;

    public EmailService (EmailDAO emailDAO){
        this.emailDAO = emailDAO;
    }

    public int insertEmail (String email, String Zodiac){
        return emailDAO.return
    }

    public int deleteEmail (String email){
        return 0;
    }


}
