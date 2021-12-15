package com.horror_scope.demo.emails;

import com.horror_scope.demo.horrorscope.HorrorScope;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "emails")
public class EmailController {

    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping
    public List<EmailSent> listEmailSent() {
        return emailService.getEmailSent();
    }

    @GetMapping("email={email}")
    public Optional<Email> getEmailByEmail(@PathVariable("email") String email) {
        return emailService.getEmail(email);
    }

    @PostMapping
    public void addEmail(@RequestBody Email email) {
        emailService.addEmail(email.getEmail(), email.getZodiacSign());
    }
    
    @DeleteMapping("{email}")
    public void deleteEmail(@PathVariable("email") String email) {
        emailService.deleteEmail(email);
    }
}
