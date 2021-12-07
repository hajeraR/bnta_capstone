package com.horror_scope.demo.emails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "emails")
public class EmailController {

    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping
    public void addEmail(@RequestBody Email email) {
        emailService.addEmail(email.getEmail(), email.getZodiac());
    }
    
    @DeleteMapping("{email}")
    public void deleteEmail(@PathVariable("email") String email) {
        emailService.deleteEmail(email);
    }
}
