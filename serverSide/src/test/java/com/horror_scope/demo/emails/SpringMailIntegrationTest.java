//package com.horror_scope.demo.emails;
//
//
//import com.horror_scope.demo.horrorscope.HorrorScopeDataAccessService;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mock;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//
//import static org.mockito.Mockito.verify;
//
//@SpringBootTest
//
//public class SpringMailIntegrationTest {
//
//    private EmailSenderService emailSenderService;
//
//    @Mock
//    private JavaMailSender mailSender;
//
//
//
//    @BeforeEach
//    void setup(){
//        emailSenderService = new EmailSenderService(mailSender);
//        //emailController = new EmailController(emailSenderService);
//         }
//
////    @Test
////    void shouldSendSimpleMessage(){
////        String email = "email@example.com";
////        String body = "test body";
////        String subject = "test subject";
////        SimpleMailMessage message = new SimpleMailMessage();
////         emailSenderService.sendSimpleEmail(email, body, subject);
////
////        verify(mailSender).send(message);
////
////
////
////    }
//
//}

