package com.horror_scope.demo.monthlyHorrorScopes;

import com.horror_scope.demo.exception.Exceptions;
import com.horror_scope.demo.horrorscope.HorrorScope;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class MonthlyHorrorScopeServiceTest {

    private MonthlyHorrorScopeDAO monthlyHorrorScopeDAO;
    private MonthlyHorrorScopeService underTest;

    @BeforeEach
    void setUp() {

        monthlyHorrorScopeDAO = mock(MonthlyHorrorScopeDAO.class);
        underTest = new MonthlyHorrorScopeService(monthlyHorrorScopeDAO);
    }

    @Test
    void getMonthlyHorrorScope() {
        MonthlyHorrorScope monthlyHorrorScope = new MonthlyHorrorScope(1, "aries", "jan", "life", "icon", "dark icon", "image", "dark image", "background");
        List<MonthlyHorrorScope> mhs = List.of(monthlyHorrorScope);
        when(monthlyHorrorScopeDAO.selectMonthlyHorrorScope()).thenReturn(mhs);

        int actual = underTest.getMonthlyHorrorScope().size();
        assertThat(actual).isEqualTo(1);


    }

    @Test
    void testGetMonthlyHorrorScopeByZodiac() {
        MonthlyHorrorScope monthlyHorrorScope = new MonthlyHorrorScope(1, "aries", "jan", "life", "icon", "dark icon", "image", "dark image", "background");
        List<MonthlyHorrorScope> mhs = List.of(monthlyHorrorScope);

        when(monthlyHorrorScopeDAO.selectMonthlyHorrorScopeByZodiacSign("aries")).thenReturn(mhs);

        List<MonthlyHorrorScope> actual = underTest.getMonthlyHorrorScope("aries");

        //then
        assertThat(actual.size()).isEqualTo(1);

    }

//    @Test
//    void shouldThrowErrorIfZodiacDoesnotExist(){
//        MonthlyHorrorScope monthlyHorrorScope = new MonthlyHorrorScope(1, "aries", "jan", "life", "icon", "dark icon", "image", "dark image", "background");
//        List<MonthlyHorrorScope> mhs = List.of(monthlyHorrorScope);
//
//        when(monthlyHorrorScopeDAO.selectMonthlyHorrorScopeByZodiacSign("aries")).thenReturn(mhs);
//
//        Throwable exception = assertThrows(Exceptions.class, () -> monthlyHorrorScopeDAO.selectMonthlyHorrorScopeByZodiacSign("pisces"));
//
//        assertEquals("Monthly Horrorscope with zodiac sign %s not found", "pisces", exception.getMessage());
//
////        assertThrows(() -> underTest.getMonthlyHorrorScope("pisces"))
////                .isInstanceOf(Exceptions.class)
////                .hasMessageContaining("Monthly Horrorscope with zodiac sign %s not found", "pisces");
//
//    }
}

//    @Test
//    public void testFooThrowsIndexOutOfBoundsException() {
//        Throwable exception = assertThrows(IndexOutOfBoundsException.class, () -> foo.doStuff());
//        assertEquals("expected messages", exception.getMessage());
//    }

//public class FooTest {
//    @Rule
//    public final ExpectedException exception = ExpectedException.none();
//
//    @Test
//    public void doStuffThrowsIndexOutOfBoundsException() {
//        Foo foo = new Foo();
//
//        exception.expect(IndexOutOfBoundsException.class);
//        foo.doStuff();
//    }
//}