package com.horror_scope.demo.monthlyHorrorScopes;

import com.horror_scope.demo.horrorscope.HorrorScopeDAO;
import com.horror_scope.demo.horrorscope.HorrorScopeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

//import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.*;


public class MonthlyHorrorScopeServiceTests {

    private MonthlyHorrorScopeDAO monthlyHorrorScopeDAO;
    private MonthlyHorrorScopeService underTest;

    @BeforeEach
    void setUp() {

        monthlyHorrorScopeDAO = mock(MonthlyHorrorScopeDAO.class);
        underTest = new MonthlyHorrorScopeService(monthlyHorrorScopeDAO);
    }

    @Test
    void getHorrorScopes(){
        MonthlyHorrorScope monthlyHorrorScope = new MonthlyHorrorScope(1, "aries", "jan", "life", "icon", "dark icon", "image", "dark image", "background");
    List<MonthlyHorrorScope> mhs = List.of(monthlyHorrorScope);
        when(monthlyHorrorScopeDAO.selectMonthlyHorrorScope()).
                
    }

    private Object when(List<MonthlyHorrorScope> selectMonthlyHorrorScope) {
    }
}
