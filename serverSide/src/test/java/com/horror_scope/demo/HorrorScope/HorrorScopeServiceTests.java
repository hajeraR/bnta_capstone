package com.horror_scope.demo.HorrorScope;

import com.horror_scope.demo.exception.Exceptions;
import com.horror_scope.demo.horrorscope.HorrorScope;
import com.horror_scope.demo.horrorscope.HorrorScopeDAO;
import com.horror_scope.demo.horrorscope.HorrorScopeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.*;

public class HorrorScopeServiceTests {

    private HorrorScopeDAO horrorScopeDAO;
    private HorrorScopeService underTest;

    @BeforeEach
    void setUp() {

        horrorScopeDAO = mock(HorrorScopeDAO.class);
        underTest = new HorrorScopeService(horrorScopeDAO);
    }

    @Test
    void getDescriptions(){
        HorrorScope horrorScope = new HorrorScope("aries", "icon", "iconDark", "image", "imageDark", "background", "happy", "taurus", "gemini", "death", "yes", "no", "little", "over");

        List<HorrorScope> hsList = List.of(horrorScope);
        when(horrorScopeDAO.selectHorrorScopes()).thenReturn(hsList);

        int actual = underTest.getHorrorScope().size();
        assertThat(actual).isEqualTo(1);

    }

    @Test
    void getDescriptionByZodiac(){

        //given
        HorrorScope horrorScope = new HorrorScope("aries", "icon", "iconDark", "image", "imageDark", "background", "happy", "taurus", "gemini", "death", "yes", "no", "little", "over");

        //mocking DAO - teaching it what to do
        List<HorrorScope> hsList = List.of(horrorScope);
        when(horrorScopeDAO.selectHorrorScopeByZodiacSign("aries")).thenReturn(Optional.ofNullable(hsList.get(0)));

        //when
        HorrorScope actual = underTest.getHorrorScope("aries");

        //then
        assertThat(actual).isEqualTo(hsList.get(0));

    }

    @Test
    void shouldThrowErrorIfZodiacDoesNotExist(){

        //given
        HorrorScope horrorScope = new HorrorScope("aries", "icon", "iconDark", "image", "imageDark", "background", "happy", "taurus", "gemini", "death", "yes", "no", "little", "over");

        List<HorrorScope> hsList = List.of(horrorScope);




      when(horrorScopeDAO.selectHorrorScopeByZodiacSign("aries")).thenReturn(Optional.ofNullable(hsList.get(0)));

        assertThatThrownBy(() -> underTest.getHorrorScope("pisces"))
                .isInstanceOf(Exceptions.class)
                .hasMessageContaining("HorrorScope with zodiac sign %s not found", "pisces");


    }

}
