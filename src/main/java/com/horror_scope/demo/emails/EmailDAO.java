package com.horror_scope.demo.emails;

public interface EmailDAO {

    int insertEmail(String email, String zodiac);
    int deleteEmail(String email);
}
