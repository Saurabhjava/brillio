package com.brillio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brillio.model.CurrencyExchange;
import com.brillio.repo.IExchangeRepo;

@Service
public class ExchangeService {
	@Autowired
	private IExchangeRepo repo;
	
	
	public CurrencyExchange getExchangeValue(String from, String to) {
		return repo.findByFromAndTo(from, to);
	}
}
