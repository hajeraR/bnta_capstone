package com.horror_scope.demo.monthlyHorrorScopes;

import com.horror_scope.demo.horrorscope.HorrorScope;
import com.horror_scope.demo.horrorscope.HorrorScopeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/monthly")
public class MonthlyHorrorScopeController {

    private MonthlyHorrorScopeService monthlyHorrorScopeService;


    public MonthlyHorrorScopeController(MonthlyHorrorScopeService monthlyHorrorScopeService) {
        this.monthlyHorrorScopeService = monthlyHorrorScopeService;
    }

    @GetMapping
    public List<MonthlyHorrorScope> listMonthlyHorrorScopeService() {
        return monthlyHorrorScopeService.getMonthlyHorrorScope();
    }

    @GetMapping("{zodiacSign}")
    public MonthlyHorrorScope getMonthlyHorrorScopeByZodiacSign(@PathVariable("zodiacSign") String zodiacSign) {
        return monthlyHorrorScopeService.getMonthlyHorrorScope(zodiacSign);
    }
}
