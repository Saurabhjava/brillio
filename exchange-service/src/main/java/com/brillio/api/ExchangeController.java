package com.brillio.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.brillio.model.CurrencyExchange;
import com.brillio.service.ExchangeService;

@RestController
public class ExchangeController {
	
	@Autowired
	private Environment env;
	@Autowired
	private ExchangeService service;
	
	@GetMapping(value = "exchange/from/{from}/to/{to}")
	public CurrencyExchange getValue(@PathVariable String from, @PathVariable String to) {
		CurrencyExchange ce=service.getExchangeValue(from, to);
		ce.setPort(Integer.parseInt(env.getProperty("local.server.port")));
		return ce;
	}
}

