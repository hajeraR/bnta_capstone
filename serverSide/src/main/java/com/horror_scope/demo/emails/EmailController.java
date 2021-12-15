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
    public List<EmailToSend> listEmail() {
        return emailService.getEmail();
    }

    @GetMapping("email={email}")
    public Optional<Email> getEmailByEmail(@PathVariable("email") String email) {
        return emailService.getEmail(email);
    }

    @PostMapping
    public void addEmail(@RequestBody Email email) {
        System.out.println(email);
        List<EmailToSend> EmailBody = emailService.getEmail();
        emailService.addEmail(email.getEmail(), email.getZodiacSign(), email.getFirstName(), email.getLastName());
        service.sendSimpleEmail(email.getEmail(),
                "Good Morning " + email.getFirstName() + " " + email.getLastName() + ", \n\nThank you for subscribing to our HorrorScope Service! \n\nI see you are a " + email.getZodiacSign() + "." + "\n\nAhh yes! The Orbs speak to us: " + EmailBody.get(EmailBody.size()-1).getPersonality()+"\n\nGreat adventures await you, have a look: \n" + EmailBody.get(EmailBody.size()-1).getHorrorscope() + "\n\nBattles won and lost, we see your end near: " + EmailBody.get(EmailBody.size()-1).getDeathprediction() + "\n\nWhat a shame, so young and so much potential wasted." + "\n\nThe spirits will welcome you with open arms."  +  "\n\nStay Safe!" + "\n\nLove, \nThe HorrorScopes Team \n",
                "We're Watching You..."
        );
    }
    
    @DeleteMapping("{email}")
    public void deleteEmail(@PathVariable("email") String email) {
        emailService.deleteEmail(email);
    }
}
