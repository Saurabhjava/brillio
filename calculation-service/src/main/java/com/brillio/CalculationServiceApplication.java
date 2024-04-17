package com.brillio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class CalculationServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CalculationServiceApplication.class, args);
	}

}