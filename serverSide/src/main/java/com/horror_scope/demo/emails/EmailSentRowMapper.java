package com.horror_scope.demo.emails;

import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class EmailSentRowMapper implements RowMapper<EmailSent> {

    @Override
    public EmailSent mapRow(ResultSet rs, int rowNum) throws SQLException {
        EmailSent emailsent = new EmailSent (
                rs.getString("zodiacSign"),
                rs.getString("personality"),
                rs.getString("deathpredictions"),
                rs.getString("months"),
                rs.getString("horrorscope")
        );
        return emailsent;
    }

}
