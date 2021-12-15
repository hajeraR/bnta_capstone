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

    @Autowired
    private EmailSenderService service;

    @GetMapping
    public List<Email> listEmail() {
        return emailService.getEmail();
    }

    @GetMapping("email={email}")
    public Optional<Email> getEmailByEmail(@PathVariable("email") String email) {
        return emailService.getEmail(email);
    }

    @PostMapping
    public void addEmail(@RequestBody Email email) {
        emailService.addEmail(email.getEmail(), email.getZodiacSign(), email.getFirstName(), email.getLastName());
        service.sendSimpleEmail(email.getEmail(),
                "Good Morning " + email.getFirstName() + " " + email.getLastName() + ", \n \n Thank you for subscribing to our HorrorScope Service!" + "\n\n I see you are a " + email.getZodiacSign() + "...such a shame, so young and so much potential wasted." + "\n\n The spirits will welcome you with open arms." + "\n\n Stay Safe!" + "\n\nLove, \nThe HorrorScopes Team",
                "We're Watching You..."
        );
    }
    
    @DeleteMapping("{email}")
    public void deleteEmail(@PathVariable("email") String email) {
        emailService.deleteEmail(email);
    }
}
