package com.horror_scope.demo.emails;

import java.util.List;
import java.util.Optional;

public interface EmailDAO {

    List<Email> selectEmails();
    Optional<Email> selectEmailByEmail(String email);
    int insertEmail(String email, String zodiacSign);
    int deleteEmail(String email);
}
