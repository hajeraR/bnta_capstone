package com.horror_scope.demo;

import com.horror_scope.demo.emails.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import javax.mail.MessagingException;

@SpringBootApplication
public class HorrorScopeApplication {

	@Autowired
	private EmailSenderService service;
	public static void main(String[] args) {
		SpringApplication.run(HorrorScopeApplication.class, args);
	}

//	@EventListener(ApplicationReadyEvent.class)
//	public void triggerMail() throws MessagingException {
//
////		service.sendSimpleEmail("horrorscopes226@gmail.com",
////				"You're gonna die",
////				"Zodiac Name"
////				);

	}


