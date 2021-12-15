package com.horror_scope.demo.emails;

import java.util.Objects;

public class EmailSent {

    private String zodiacSign;
    private String Personality;
    private String DeathPrediction;
    private String Month;
    private String HorrorScope;

    public EmailSent(String zodiacSign, String personality, String deathPrediction, String month, String horrorScope) {
        this.zodiacSign = zodiacSign;
        Personality = personality;
        DeathPrediction = deathPrediction;
        Month = month;
        HorrorScope = horrorScope;
    }

    public String getZodiacSign() {
        return zodiacSign;
    }

    public void setZodiacSign(String zodiacSign) {
        this.zodiacSign = zodiacSign;
    }

    public String getPersonality() {
        return Personality;
    }

    public void setPersonality(String personality) {
        Personality = personality;
    }

    public String getDeathPrediction() {
        return DeathPrediction;
    }

    public void setDeathPrediction(String deathPrediction) {
        DeathPrediction = deathPrediction;
    }

    public String getMonth() {
        return Month;
    }

    public void setMonth(String month) {
        Month = month;
    }

    public String getHorrorScope() {
        return HorrorScope;
    }

    public void setHorrorScope(String horrorScope) {
        HorrorScope = horrorScope;
    }

    @Override
    public String toString() {
        return "EmailSent{" +
                "zodiacSign='" + zodiacSign + '\'' +
                ", Personality='" + Personality + '\'' +
                ", DeathPrediction='" + DeathPrediction + '\'' +
                ", Month='" + Month + '\'' +
                ", HorrorScope='" + HorrorScope + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmailSent emailSent = (EmailSent) o;
        return Objects.equals(zodiacSign, emailSent.zodiacSign) && Objects.equals(Personality, emailSent.Personality) && Objects.equals(DeathPrediction, emailSent.DeathPrediction) && Objects.equals(Month, emailSent.Month) && Objects.equals(HorrorScope, emailSent.HorrorScope);
    }

    @Override
    public int hashCode() {
        return Objects.hash(zodiacSign, Personality, DeathPrediction, Month, HorrorScope);
    }
}
