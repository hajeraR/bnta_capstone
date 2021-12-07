package com.horror_scope.demo.monthlyHorrorScopes;

import java.util.Objects;

public class MonthlyHorrorScope {

    private int id;
    private String zodiacSign;
    private String month;
    private String horrorScope;
    private String zodiacIcon;
    private String zodiacIconDark;
    private String zodiacImage;
    private String zodiacImageDark;
    private String zodiacBackground;

   

    public MonthlyHorrorScope(int id, String zodiacSign, String month, String horrorScope, String zodiacIcon, String zodiacIconDark, String zodiacImage, String zodiacImageDark, String zodiacBackground) {
        this.id = id;
        this.zodiacSign = zodiacSign;
        this.month = month;
        this.horrorScope = horrorScope;
        this.zodiacIcon = zodiacIcon;
        this.zodiacIconDark = zodiacIconDark;
        this.zodiacImage = zodiacImage;
        this.zodiacImageDark = zodiacImageDark;
        this.zodiacBackground = zodiacBackground;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getZodiacSign() {
        return zodiacSign;
    }

    public void setZodiacSign(String zodiacSign) {
        this.zodiacSign = zodiacSign;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getHorrorScope() {
        return horrorScope;
    }

    public void setHorrorScope(String horrorScope) {
        this.horrorScope = horrorScope;
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

    @Override
    public String toString() {
        return "MonthlyHorrorScope{" +
                "id=" + id +
                ", zodiacSign='" + zodiacSign + '\'' +
                ", month='" + month + '\'' +
                ", horrorScope='" + horrorScope + '\'' +
                ", zodiacIcon='" + zodiacIcon + '\'' +
                ", zodiacIconDark='" + zodiacIconDark + '\'' +
                ", zodiacImage='" + zodiacImage + '\'' +
                ", zodiacImageDark='" + zodiacImageDark + '\'' +
                ", zodiacBackground='" + zodiacBackground + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MonthlyHorrorScope that = (MonthlyHorrorScope) o;
        return id == that.id && Objects.equals(zodiacSign, that.zodiacSign) && Objects.equals(month, that.month) && Objects.equals(horrorScope, that.horrorScope) && Objects.equals(zodiacIcon, that.zodiacIcon) && Objects.equals(zodiacIconDark, that.zodiacIconDark) && Objects.equals(zodiacImage, that.zodiacImage) && Objects.equals(zodiacImageDark, that.zodiacImageDark) && Objects.equals(zodiacBackground, that.zodiacBackground);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, zodiacSign, month, horrorScope, zodiacIcon, zodiacIconDark, zodiacImage, zodiacImageDark, zodiacBackground);
    }
}
