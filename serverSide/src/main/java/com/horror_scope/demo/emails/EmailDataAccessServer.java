package com.horror_scope.demo.emails;


import com.horror_scope.demo.horrorscope.HorrorScope;
import com.horror_scope.demo.horrorscope.HorrorScopeRowMapper;
import org.apache.tomcat.jni.Local;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

@Repository("postgres")
public class EmailDataAccessServer implements EmailDAO{
    private JdbcTemplate jdbcTemplate;

    public EmailDataAccessServer(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public List<EmailToSend> selectEmails() {


        String sql = """               
                SELECT emails.zodiacSign, descriptions.personality, descriptions.deathpredictions, monthly_horrorscopes.months, monthly_horrorscopes.horrorscope 
                FROM emails 
                LEFT JOIN descriptions ON lower(emails.zodiacSign) = lower(descriptions.zodiacSign) 
                LEFT JOIN monthly_horrorscopes ON lower(monthly_horrorscopes.zodiacSign) = lower(emails.zodiacSign)
                
                """;
        return jdbcTemplate.query(sql, new EmailSentRowMapper());
    }

    @Override
    public Optional<Email> selectEmailByEmail (String email) {
        String sql = """
                SELECT * FROM emails WHERE email = ?
                """;
        return jdbcTemplate.query(sql, new EmailRowMapper(), email)
                .stream()
                .findFirst();
    }

    @Override
    public int insertEmail(String email, String zodiacSign, String firstName, String lastName) {
        String sql = """
                INSERT INTO emails (email, zodiacSign, firstName, lastName) VALUES (?,?,?,?);
                """;
        return jdbcTemplate.update(sql, email, zodiacSign, firstName, lastName);
    }

    @Override
    public int deleteEmail(String email) {
        String sql = """
                DELETE FROM emails WHERE email = ?;
                """;
        return jdbcTemplate.update(sql,email);
    }

}
