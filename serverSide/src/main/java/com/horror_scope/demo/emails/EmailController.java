package com.horror_scope.demo.emails;

import com.horror_scope.demo.horrorscope.HorrorScope;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Month;
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
        String MonthNow = LocalDate.now().getMonth().toString();
        return emailService.getEmailToSend();
    }

    @GetMapping("email={email}")
    public Optional<Email> getEmailByEmail(@PathVariable("email") String email) {
        return emailService.getEmail(email);
    }

    @PostMapping
    public void addEmail(@RequestBody Email email) {
        System.out.println(email);

        emailService.addEmail(email.getEmail(), email.getZodiacSign(), email.getFirstName(), email.getLastName());
        String MonthNow = LocalDate.now().getMonth().toString();
      
        System.out.println(MonthNow);
        List<EmailToSend> EmailBody = emailService.getEmailToSend();
        for (int i = EmailBody.size()-1; i >=0 ; i--){
            System.out.println(EmailBody.get(i).getMonth());
            if(EmailBody.get(i).getMonth().equals(MonthNow) ){
                service.sendSimpleEmail(email.getEmail(),
                        "Good Morning " + email.getFirstName() + " " + email.getLastName() + ", \n\nThank you for subscribing to our HorrorScope Service! \n\nI see you are a " + email.getZodiacSign() + "." + "\n\nAhh yes! The Orbs speak to us: " + EmailBody.get(i).getPersonality()+"\n\nGreat adventures await you, have a look: \n" + EmailBody.get(i).getHorrorscope() + "\n\nBattles won and lost, we see your end near: " + EmailBody.get(i).getDeathprediction() + "\n\nWhat a shame, so young and so much potential wasted." + "\n\nThe spirits will welcome you with open arms."  +  "\n\nStay Safe!" + "\n\nLove, \nThe HorrorScopes Team \n",
                        "We're Watching You..."
                );

                break;
            }else System.out.println("failed");
        }

    }
    
    @DeleteMapping("{email}")
    public void deleteEmail(@PathVariable("email") String email) {
        emailService.deleteEmail(email);
    }
}
