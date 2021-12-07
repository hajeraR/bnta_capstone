package com.horror_scope.demo.monthlyHorrorScopes;

import com.horror_scope.demo.horrorscope.HorrorScope;
import com.horror_scope.demo.horrorscope.HorrorScopeRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class MonthlyHorrorScopeDataAccessService implements MonthlyHorrorScopeDAO{

    private final JdbcTemplate jdbcTemplate;

    public MonthlyHorrorScopeDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public List<MonthlyHorrorScope> selectMonthlyHorrorScope() {
        String sql = """               
                SELECT monthly_horrorscopes.*, desciptions.zodiacIcon, desciptions.zodiacIconDark,  zodiacBackground 
                FROM monthly_horrorscopes 
                LEFT JOIN descriptions 
                ON monthly_horrorscopes.zodiacSign = desciptions.zodiacSign;
                """;
        return jdbcTemplate.query(sql, new MonthlyHorrorScopeRowMapper()) ;
    }

    @Override
    public Optional<MonthlyHorrorScope> selectMonthlyHorrorScopeByZodiacSign(String zodiacSign) {

        String sql = """               
                SELECT monthly_horrorscopes.*, desciptions.zodiacIcon, desciptions.zodiacIconDark,  zodiacBackground 
                FROM monthly_horrorscopes 
                LEFT JOIN descriptions 
                ON monthly_horrorscopes.zodiacSign = desciptions.zodiacSign
                WHERE monthly_horrorscopes.zodiacSign = zodiacSign;
                """;

        return jdbcTemplate.query(sql, new MonthlyHorrorScopeRowMapper(), zodiacSign)
                .stream()
                .findFirst();

    }
}
