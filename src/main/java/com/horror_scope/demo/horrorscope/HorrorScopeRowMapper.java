package com.horror_scope.demo.horrorscope;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class HorrorScopeRowMapper implements RowMapper<HorrorScope> {

    @Override
    public HorrorScope mapRow(ResultSet resultSet, int rowNum) throws SQLException {



        return new HorrorScope(
                resultSet.getString("zodiacSign"),
                resultSet.getString("zodiacIcon"),
                resultSet.getString("zodiacIconDark"),
                resultSet.getString("zodiacImage"),
                resultSet.getString("zodiacImageDark"),
                resultSet.getString("personality"),
                resultSet.getString("positiveMatch"),
                resultSet.getString("negativeMatch"),
                resultSet.getString("deathPredictions"),
                resultSet.getString("romance"),
                resultSet.getString("family"),
                resultSet.getString("money"),
                resultSet.getString("career")
       );

    }


}
