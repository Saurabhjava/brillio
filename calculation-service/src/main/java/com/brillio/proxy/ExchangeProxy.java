package com.brillio.proxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.brillio.model.CalculationBean;

@FeignClient(name="exchange-service",url = "http://localhost:8080")
public interface ExchangeProxy {
	@GetMapping("exchange/from/{from}/to/{to}")
	public CalculationBean getExchangeValue(@PathVariable String from, @PathVariable String to);
}
