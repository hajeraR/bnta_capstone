package com.horror_scope.demo.monthlyHorrorScopes;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class MonthlyHorrorScopeRowMapper implements RowMapper<MonthlyHorrorScope> {

    @Override
    public MonthlyHorrorScope mapRow(ResultSet rs, int rowNum) throws SQLException {
        MonthlyHorrorScope monthlyHorrorScope = new  Mont(
                rs.getInt("id"),
                rs.getString("email"),
                rs.getString("zodiac")
        );
        return email;
    }
}
