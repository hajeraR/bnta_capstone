package com.horror_scope.demo.emails;

import java.time.Month;
import java.util.List;
import java.util.Optional;

public interface EmailDAO {

    List<EmailToSend> selectEmails();
    Optional<Email> selectEmailByEmail(String email);
    int insertEmail(String email, String zodiacSign, String firstName, String lastName);
    int deleteEmail(String email);
}
