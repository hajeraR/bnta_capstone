package com.horror_scope.demo.emails;

import java.util.Objects;

public class EmailToSend {

    private String zodiacSign;
    private String personality;
    private String deathprediction;
    private String month;
    private String horrorscope;

    public EmailToSend(String zodiacSign, String personality, String deathprediction, String month, String horrorscope) {
        this.zodiacSign = zodiacSign;
        this.personality = personality;
        this.deathprediction = deathprediction;
        this.month = month;
        this.horrorscope = horrorscope;
    }

    public String getZodiacSign() {
        return zodiacSign;
    }

    public void setZodiacSign(String zodiacSign) {
        this.zodiacSign = zodiacSign;
    }

    public String getPersonality() {
        return personality;
    }

    public void setPersonality(String personality) {
        this.personality = personality;
    }

    public String getDeathprediction() {
        return deathprediction;
    }

    public void setDeathprediction(String deathprediction) {
        this.deathprediction = deathprediction;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getHorrorscope() {
        return horrorscope;
    }

    public void setHorrorscope(String horrorscope) {
        this.horrorscope = horrorscope;
    }

    @Override
    public String toString() {
        return "EmailToSend{" +
                "zodiacSign='" + zodiacSign + '\'' +
                ", personality='" + personality + '\'' +
                ", deathprediction='" + deathprediction + '\'' +
                ", month='" + month + '\'' +
                ", horrorscope='" + horrorscope + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmailToSend that = (EmailToSend) o;
        return Objects.equals(zodiacSign, that.zodiacSign) && Objects.equals(personality, that.personality) && Objects.equals(deathprediction, that.deathprediction) && Objects.equals(month, that.month) && Objects.equals(horrorscope, that.horrorscope);
    }

    @Override
    public int hashCode() {
        return Objects.hash(zodiacSign, personality, deathprediction, month, horrorscope);
    }
}
