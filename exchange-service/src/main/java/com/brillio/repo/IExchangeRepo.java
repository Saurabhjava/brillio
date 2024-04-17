package com.brillio.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brillio.model.CurrencyExchange;

public interface IExchangeRepo extends JpaRepository<CurrencyExchange, Integer> {
	public CurrencyExchange findByFromAndTo(String from, String to);
}
