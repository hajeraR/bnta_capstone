package com.horror_scope.demo.HorrorScope;

import com.horror_scope.demo.horrorscope.HorrorScope;
import com.horror_scope.demo.horrorscope.HorrorScopeDataAccessService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@DataJdbcTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class HorrorScopeDataAccessServiceTest {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    private HorrorScopeDataAccessService underTest;

    @BeforeAll
    void setup(){
        underTest = new HorrorScopeDataAccessService(jdbcTemplate);
        jdbcTemplate.execute("INSERT INTO descriptions(zodiacSign, zodiacIcon, zodiacIconDark, zodiacImage, zodiacImageDark, zodiacBackground, personality, positiveMatch, negativeMatch, deathPredictions, romance, family, money, career) VALUES('aries', 'icon', 'iconDark', 'image, 'imageDark', 'background', 'happy', 'taurus', 'gemini', 'death', 'yes', 'no', 'little', 'over');");
    }

    @Test
    void selectHorrorScopes() {
        List<HorrorScope> actual = underTest.selectHorrorScopes();
        List<HorrorScope> expected = List.of(new HorrorScope("aries", "icon", "iconDark", "image", "imageDark", "background", "happy", "taurus", "gemini", "death", "yes", "no", "little", "over"));

        assertThat(actual).isEqualTo(expected);
    }

    @Test
    void selectHorrorScopeByZodiacSign() {
    }
}