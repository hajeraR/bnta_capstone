package com.horror_scope.demo.horrorscope;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/horrorScope")
public class HorrorScopeController {

    private HorrorScopeService horrorScopeService;


    public HorrorScopeController(HorrorScopeService horrorScopeService) {
        this.horrorScopeService = horrorScopeService;
    }

    @GetMapping
    public List<HorrorScope> listHorrorScope() {
        return horrorScopeService.getHorrorScope();
    }

    @GetMapping("{zodiacSign}")
    public HorrorScope getHorrorScopeByZodiacSign(@PathVariable("zodiacSign") String zodiacSign) {
        return horrorScopeService.getHorrorScope(zodiacSign);
    }

//    @PostMapping
//    public void addRecipe(@RequestBody Recipe recipe) {
//        recipeService.addNewRecipe(recipe);
//    }
//
//    @DeleteMapping("{id}")
//    public void deleteRecipe(@PathVariable("id") Integer id) {
//        recipeService.deleteRecipe(id);
//    }
//
//    @PutMapping("{id}")
//    public void updateRecipe( @RequestBody Recipe recipe, @PathVariable("id") Integer id) { recipeService.updateRecipe(recipe,id);}

}
