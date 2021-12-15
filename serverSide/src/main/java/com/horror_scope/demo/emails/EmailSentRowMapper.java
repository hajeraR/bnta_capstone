package com.horror_scope.demo.emails;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class EmailSentRowMapper implements RowMapper<EmailToSend> {

    @Override
    public EmailToSend mapRow(ResultSet rs, int rowNum) throws SQLException {
        EmailToSend emailToSend = new EmailToSend (
                rs.getString("zodiacSign"),
                rs.getString("personality"),
                rs.getString("deathpredictions"),
                rs.getString("months"),
                rs.getString("horrorscope")

        );
        return emailToSend;
    }
}
