package com.horror_scope.demo.emails;

import java.util.Objects;

public class Email {
    private int id;
    private String email;
    private String zodiacSign;
//    private String body;
//    private String subject;

    public Email(int id, String email, String zodiacSign) {
        this.id = id;
        this.email = email;
        this.zodiacSign = zodiacSign;
    }

//    public Email(String email, String body, String subject) {
//        this.email = email;
//        this.body = body;
//        this.subject = subject;
//    }

//    public String getSubject() {
//        return subject;
//    }
//
//    public void setSubject(String subject) {
//        this.subject = subject;
//    }
//
//    public String getBody() {
//        return body;
//    }
//
//    public void setBody(String body) {
//        this.body = body;
//    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getZodiacSign() {
        return zodiacSign;
    }

    public void setZodiacSign(String zodiacSign) {
        this.zodiacSign = zodiacSign;
    }

    @Override
    public String toString() {
        return "Email{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", zodiacSign='" + zodiacSign + '\'' +
                '}';
    }


    @Override
    public boolean equals(Object o) {

        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Email email1 = (Email) o;
        return id == email1.id && Objects.equals(email, email1.email) && Objects.equals(zodiacSign, email1.zodiacSign);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, zodiacSign);
    }
}
