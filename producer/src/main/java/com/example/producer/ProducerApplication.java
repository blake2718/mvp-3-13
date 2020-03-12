package com.example.producer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.core.MessageCreator;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.Session;
import javax.jms.TextMessage;

@SpringBootApplication
@RestController
@EnableJms
public class ProducerApplication {

	@Autowired
	private JmsTemplate jmsTemplate;

	public static void main(String[] args) {
		SpringApplication.run(ProducerApplication.class, args);
	}

	@CrossOrigin
	@RequestMapping("/")
	public String index(){
		return "You've pinged the producer!\n";
	}

	@CrossOrigin
	@RequestMapping("/send")
	public String send(@RequestParam(required = false) String tag, @RequestParam(required = false) String msg){
		if (msg != null && !msg.isEmpty()){
			try{
				jmsTemplate.send("QR", session -> {
					TextMessage message = session.createTextMessage(msg);
					if (tag != null && !tag.isEmpty()){
						message.setStringProperty("color", tag);
					}
					return message;
				});
				return "sent\n";
			} catch (Exception e) {
				e.printStackTrace();
				return "no send\n";
			}
		} else {
			return "no send, no message provided\n";
		}
	}

}
