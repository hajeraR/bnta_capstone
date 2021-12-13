package com.horror_scope.demo.HorrorScope;

import com.horror_scope.demo.horrorscope.HorrorScope;
import com.horror_scope.demo.horrorscope.HorrorScopeDataAccessService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class HorrorScopeDataAccessServiceTest {

    @Autowired private JdbcTemplate jdbcTemplate;
    private HorrorScopeDataAccessService underTest;

    @BeforeEach
    void setup(){
        underTest = new HorrorScopeDataAccessService(jdbcTemplate);
       // jdbcTemplate.execute("INSERT INTO descriptions(zodiacSign, zodiacIcon, zodiacIconDark, zodiacImage, zodiacImageDark, zodiacBackground, personality, positiveMatch, negativeMatch, deathPredictions, romance, family, money, career) VALUES('aries', 'icon', 'iconDark', 'image', 'imageDark', 'background', 'happy', 'taurus', 'gemini', 'death', 'yes', 'no', 'little', 'over');");
    }




    @Test
    void selectHorrorScopes() {
        List<HorrorScope> actual = underTest.selectHorrorScopes();
       // List<HorrorScope> expected = List.of(new HorrorScope("aries", "icon", "iconDark", "image", "imageDark", "background", "happy", "taurus", "gemini", "death", "yes", "no", "little", "over"));

        assertThat(actual.size()).isEqualTo(1);
    }

    @Test
    void selectHorrorScopeByZodiacSign() {

        Optional<HorrorScope> actual = underTest.selectHorrorScopeByZodiacSign("virgo");
        Optional<HorrorScope> expected = Optional.of(new HorrorScope("Virgo", "./virgoIcon", "./virgoIconDark", "./virgoImage", "./virgoImageDark", "./virgoBackground", "Virgos are a big fan of the french Horn.", "Taurus - after all they are often small and easy to bludgeon.", "Scorpio - You're neighbours but they glare when you pass them in the street.", "The second Tuesday of the month.", "Unlikely.", "You still get phone calls from your mother every Sunday. You haven't had the heart to remind her she's been dead for seven years now.", "Throw a gold coin in the fountain. You must appease the spirit.", "You will have a long running career as a theater musician. Beware of falling light fixtures."));
        assertThat(actual).isEqualTo(expected);
    }
}
