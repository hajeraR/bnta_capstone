package com.horror_scope.demo.emails;


import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository("postgres")
public class EmailDataAccessServer implements EmailDAO{
    private JdbcTemplate jdbcTemplate;

    public EmailDataAccessServer(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertEmail(String email, String zodiac) {
        String sql = """
                INSERT INTO emails (email, zodiac) VALUES (?,?);
                """;
        return jdbcTemplate.update(sql, email, zodiac);
    }

    @Override
    public int deleteEmail(String email) {
        String sql = """
                DELETE FROM emails WHERE email = ?;
                """;
        return jdbcTemplate.update(sql,email);
    }

}
