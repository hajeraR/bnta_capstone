package com.horror_scope.demo.horrorscope;

import java.util.Objects;

public class HorrorScope {

    private String zodiacSign;
    private String zodiacIcon;
    private String zodiacIconDark;
    private String zodiacImage;
    private String zodiacImageDark;
    private String zodiacBackground;
    private String personality;
    private String positiveMatch;
    private String negativeMatch;
    private String deathPrediction;
    private String romance;
    private String family;
    private String money;
    private String career;

    public HorrorScope(String zodiacSign, String zodiacIcon, String zodiacIconDark, String zodiacImage, String zodiacImageDark, String zodiacBackground, String personality, String positiveMatch, String negativeMatch, String deathPrediction, String romance, String family, String money, String career) {
        this.zodiacSign = zodiacSign;
        this.zodiacIcon = zodiacIcon;
        this.zodiacIconDark = zodiacIconDark;
        this.zodiacImage = zodiacImage;
        this.zodiacImageDark = zodiacImageDark;
        this.zodiacBackground = zodiacBackground;
        this.personality = personality;
        this.positiveMatch = positiveMatch;
        this.negativeMatch = negativeMatch;
        this.deathPrediction = deathPrediction;
        this.romance = romance;
        this.family = family;
        this.money = money;
        this.career = career;
    }

    public String getZodiacSign() {
        return zodiacSign;
    }

    public void setZodiacSign(String zodiacSign) {
        this.zodiacSign = zodiacSign;
    }

    public String getZodiacIcon() {
        return zodiacIcon;
    }

    public void setZodiacIcon(String zodiacIcon) {
        this.zodiacIcon = zodiacIcon;
    }

    public String getZodiacIconDark() {
        return zodiacIconDark;
    }

    public void setZodiacIconDark(String zodiacIconDark) {
        this.zodiacIconDark = zodiacIconDark;
    }

    public String getZodiacImage() {
        return zodiacImage;
    }

    public void setZodiacImage(String zodiacImage) {
        this.zodiacImage = zodiacImage;
    }

    public String getZodiacImageDark() {
        return zodiacImageDark;
    }

    public void setZodiacImageDark(String zodiacImageDark) {
        this.zodiacImageDark = zodiacImageDark;
    }

    public String getZodiacBackground() {
        return zodiacBackground;
    }

    public void setZodiacBackground(String zodiacBackground) {
        this.zodiacBackground = zodiacBackground;
    }

    public String getPersonality() {
        return personality;
    }

    public void setPersonality(String personality) {
        this.personality = personality;
    }

    public String getPositiveMatch() {
        return positiveMatch;
    }

    public void setPositiveMatch(String positiveMatch) {
        this.positiveMatch = positiveMatch;
    }

    public String getNegativeMatch() {
        return negativeMatch;
    }

    public void setNegativeMatch(String negativeMatch) {
        this.negativeMatch = negativeMatch;
    }

    public String getDeathPrediction() {
        return deathPrediction;
    }

    public void setDeathPrediction(String deathPrediction) {
        this.deathPrediction = deathPrediction;
    }

    public String getRomance() {
        return romance;
    }

    public void setRomance(String romance) {
        this.romance = romance;
    }

    public String getFamily() {
        return family;
    }

    public void setFamily(String family) {
        this.family = family;
    }

    public String getMoney() {
        return money;
    }

    public void setMoney(String money) {
        this.money = money;
    }

    public String getCareer() {
        return career;
    }

    public void setCareer(String career) {
        this.career = career;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HorrorScope that = (HorrorScope) o;
        return Objects.equals(zodiacSign, that.zodiacSign) && Objects.equals(zodiacIcon, that.zodiacIcon) && Objects.equals(zodiacIconDark, that.zodiacIconDark) && Objects.equals(zodiacImage, that.zodiacImage) && Objects.equals(zodiacImageDark, that.zodiacImageDark) && Objects.equals(zodiacBackground, that.zodiacBackground) && Objects.equals(personality, that.personality) && Objects.equals(positiveMatch, that.positiveMatch) && Objects.equals(negativeMatch, that.negativeMatch) && Objects.equals(deathPrediction, that.deathPrediction) && Objects.equals(romance, that.romance) && Objects.equals(family, that.family) && Objects.equals(money, that.money) && Objects.equals(career, that.career);
    }

    @Override
    public int hashCode() {
        return Objects.hash(zodiacSign, zodiacIcon, zodiacIconDark, zodiacImage, zodiacImageDark, zodiacBackground, personality, positiveMatch, negativeMatch, deathPrediction, romance, family, money, career);
    }

    @Override
    public String toString() {
        return "HorrorScope{" +
                "zodiacSign='" + zodiacSign + '\'' +
                ", zodiacIcon='" + zodiacIcon + '\'' +
                ", zodiacIconDark='" + zodiacIconDark + '\'' +
                ", zodiacImage='" + zodiacImage + '\'' +
                ", zodiacImageDark='" + zodiacImageDark + '\'' +
                ", zodiacBackground='" + zodiacBackground + '\'' +
                ", personality='" + personality + '\'' +
                ", positiveMatch='" + positiveMatch + '\'' +
                ", negativeMatch='" + negativeMatch + '\'' +
                ", deathPrediction='" + deathPrediction + '\'' +
                ", romance='" + romance + '\'' +
                ", family='" + family + '\'' +
                ", money='" + money + '\'' +
                ", career='" + career + '\'' +
                '}';
    }

}
