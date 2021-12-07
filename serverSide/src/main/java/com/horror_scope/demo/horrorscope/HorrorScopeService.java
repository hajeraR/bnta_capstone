package com.horror_scope.demo.horrorscope;

import com.horror_scope.demo.exception.Exceptions;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class HorrorScopeService {

    private final HorrorScopeDAO horrorScopeDAO;


    public HorrorScopeService(HorrorScopeDAO horrorScopeDAO) {
        this.horrorScopeDAO = horrorScopeDAO;
    }


    public List<HorrorScope> getHorrorScope() {
        return horrorScopeDAO.selectHorrorScopes();
    }


    public HorrorScope getHorrorScope(String zodiacSign) {
        return horrorScopeDAO.selectHorrorScopeByZodiacSign(zodiacSign)
                .orElseThrow(() -> new Exceptions(String.format("HorrorScope with zodiac sign %s not found", zodiacSign)));
    }

}
