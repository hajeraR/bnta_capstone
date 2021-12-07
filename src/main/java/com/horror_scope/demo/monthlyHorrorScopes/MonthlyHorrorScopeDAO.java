package com.horror_scope.demo.monthlyHorrorScopes;

import com.horror_scope.demo.horrorscope.HorrorScope;

import java.util.List;
import java.util.Optional;

public interface MonthlyHorrorScopeDAO {

    List<MonthlyHorrorScope> selectMonthlyHorrorScope();
    //    int insertRecipe(Recipe recipe);
//    int deleteRecipe(int id);
    Optional<MonthlyHorrorScope> selectMonthlyHorrorScopeByZodiacSign(String zodiacSign);
//    int updateRecipe( Recipe recipe, Integer id);
}
