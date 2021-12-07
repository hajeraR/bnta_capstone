package com.horror_scope.demo.monthlyHorrorScopes;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class MonthlyHorrorScopeRowMapper implements RowMapper<MonthlyHorrorScope> {

    @Override
    public MonthlyHorrorScope mapRow(ResultSet rs, int rowNum) throws SQLException {
        MonthlyHorrorScope monthlyHorrorScope = new MonthlyHorrorScope(
                rs.getInt("id"),
                rs.getString("zodiacSign"),
                rs.getString("months"),
                rs.getString("horrorScope"),
                rs.getString("zodiacIcon"),
                rs.getString("zodiacIconDark"),
                rs.getString("zodiacImage"),
                rs.getString("zodiacImageDark"),
                rs.getString("zodiacBackground")
        );
        return monthlyHorrorScope;
    }
}
