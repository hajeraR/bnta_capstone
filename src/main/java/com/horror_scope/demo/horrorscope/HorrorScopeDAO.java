package com.horror_scope.demo.horrorscope;

import java.util.List;
import java.util.Optional;

public interface HorrorScopeDAO {

    List<HorrorScope> selectHorrorScopes();
//    int insertRecipe(Recipe recipe);
//    int deleteRecipe(int id);
    Optional<HorrorScope> selectHorrorScopeByZodiacSign(String zodiacSign);
//    int updateRecipe( Recipe recipe, Integer id);

}
