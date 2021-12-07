package com.horror_scope.demo.emails;

import com.horror_scope.demo.horrorscope.HorrorScopeDAO;
import com.horror_scope.demo.horrorscope.HorrorScopeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

class EmailServiceTest {

    private EmailDAO emailDAO;
    private EmailService underTest;

    @BeforeEach
    void setUp() {

        emailDAO = mock(EmailDAO.class);
        underTest = new EmailService(emailDAO);
    }

    @Test
    void shouldReturnTrue() {
        //given
        String email = "email@email.com";
        //when
        //then
        assertThat(underTest.isValid(email)).isEqualTo(true);
    }

    @Test
    void shouldReturnError() {
        String email = "not an email";

        assertThatThrownBy(() => underTest.isValid(email))
            .orElseThrows(Exception);
    }

    @Test
    void getEmail() {
    }

    @Test
    void addEmail() {
    }

    @Test
    void deleteEmail() {
    }
}