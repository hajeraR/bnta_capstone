package com.horror_scope.demo.emails;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class EmailRowMapper implements RowMapper<Email> {

    @Override
    public Email mapRow(ResultSet rs, int rowNum) throws SQLException {
        Email email = new Email (
                rs.getInt("id"),
                rs.getString("email"),
                rs.getString("zodiacSign")
        );
        return email;
    }
}
