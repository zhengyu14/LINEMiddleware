package com.avery.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import com.avery.gateway.filters.pre.*;

@EnableZuulProxy
@SpringBootApplication
public class GatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}

	@Bean
	public BasicAuth basicAuth() {
		return new BasicAuth();
	}

	@Bean
	public ReplaceAuthHeader replaceAuthHeader() {
		return new ReplaceAuthHeader();
	}

}