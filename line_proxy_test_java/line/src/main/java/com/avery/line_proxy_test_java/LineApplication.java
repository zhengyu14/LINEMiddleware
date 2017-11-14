package com.avery.line_proxy_test_java;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class LineApplication {

	@RequestMapping(value = "/v2/bot/message/multicast")
	public String available() {
		return "Spring in Action";
	}

	public static void main(String[] args) {
		SpringApplication.run(LineApplication.class, args);
	}
}
