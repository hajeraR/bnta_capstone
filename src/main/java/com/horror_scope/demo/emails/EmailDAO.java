package com.horror_scope.demo.emails;

import java.util.Optional;

public interface EmailDAO {

    Optional<Email> selectEmailByEmail(String email);
    int insertEmail(String email, String zodiac);
    int deleteEmail(String email);
}
