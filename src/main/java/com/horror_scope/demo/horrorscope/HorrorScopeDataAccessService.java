package com.horror_scope.demo.horrorscope;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class HorrorScopeDataAccessService implements HorrorScopeDAO{

    private final JdbcTemplate jdbcTemplate;

    public HorrorScopeDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
     public List<HorrorScope> selectHorrorScopes() {
        String sql = """               
                SELECT * FROM descriptions;
                """;
        return jdbcTemplate.query(sql, new HorrorScopeRowMapper()) ;
    }

    @Override
     public Optional<HorrorScope> selectHorrorScopeByZodiacSign(String zodiacSign) {

        String sql = """
                SELECT * FROM descriptions WHERE zodiacSign = ?;
                """;

        return jdbcTemplate.query(sql, new HorrorScopeRowMapper(), zodiacSign)
                .stream()
                .findFirst();

    }



}
