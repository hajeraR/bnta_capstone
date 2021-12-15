package com.horror_scope.demo.emails;

import java.util.Objects;

public class Email {
    private int id;
    private String email;
    private String zodiacSign;
    private String firstName;
    private String lastName;

    public Email(int id, String email, String zodiacSign, String firstName, String lastName) {
        this.id = id;
        this.email = email;
        this.zodiacSign = zodiacSign;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

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
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Email email1 = (Email) o;
        return id == email1.id && Objects.equals(email, email1.email) && Objects.equals(zodiacSign, email1.zodiacSign) && Objects.equals(firstName, email1.firstName) && Objects.equals(lastName, email1.lastName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, zodiacSign, firstName, lastName);
    }
}
