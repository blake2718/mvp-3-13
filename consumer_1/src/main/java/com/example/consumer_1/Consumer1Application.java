package com.example.consumer_1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.jms.Message;

@SpringBootApplication
@RestController
@EnableJms
public class Consumer1Application {

	final String SELECTOR = System.getenv("QUEUE");
	@Autowired
	JmsTemplate jmsTemplate;

	public static void main(String[] args) {
		SpringApplication.run(Consumer1Application.class, args);
	}

	@CrossOrigin
	@RequestMapping("/")
	public String index(){
		return "You've pinged consumer1!\n";
	}

	@CrossOrigin
	@RequestMapping("/cnsm")
	public String red(){
		try{
			Message message = jmsTemplate.receive(SELECTOR);
			if (message != null){
				return message.getBody(String.class);
			} else {
				return "no message\n";
			}
		} catch (Exception e) {
			e.printStackTrace();
			return "exception was thrown while getting the message\n";
		}
	}

}
