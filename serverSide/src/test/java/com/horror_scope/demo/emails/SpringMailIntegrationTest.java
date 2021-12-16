package com.horror_scope.demo.emails;

import com.horror_scope.demo.emails.EmailService;
import com.horror_scope.demo.emails.EmailToSend;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;


@SpringBootTest
@ActiveProfiles("test")
@RunWith(SpringRunner.class)
public class SpringMailIntegrationTest {

    @Autowired
    private EmailSenderService emailSenderService;

    @Rule
    public SMTPServerRule smtpServerRule = new SMTPServerRule(2525);

//    @Test
//    public void shouldSendSingleMail() throws MessagingException, IOException {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom("horrorscope226@gmail.com");
//        message.setTo("horrorscope226@gmail.com");
//        message.setSubject("test subject");
//        message.setText("test email");
//
//        emailSenderService.sendSimpleEmail("horrorscope226@gmail.com", "test body", "test subject");
//
//        MimeMessage[] receivedMessages = smtpServerRule.getMessages();
//        assertEquals(1, receivedMessages.length);
//
//        MimeMessage current = receivedMessages[0];
//
//        assertEquals(message.getSubject(), current.getSubject());
//        assertEquals(message.getTo(), current.getAllRecipients()[0].toString());
//        assertTrue(String.valueOf(current.getContent()).contains(message.getText()));
//
//    }

}

