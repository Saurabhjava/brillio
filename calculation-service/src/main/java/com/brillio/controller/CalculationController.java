package com.brillio.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.brillio.model.CalculationBean;
import com.brillio.proxy.ExchangeProxy;

@RestController
public class CalculationController {
	@Autowired
	private ExchangeProxy eProxy;
	@GetMapping(value = "calculationService/from/{from}/to/{to}/qty/{qty}")
	public CalculationBean convertCurrency(@PathVariable String from,@PathVariable String to,@PathVariable double qty) {
		/*
		 * Map<String, String> m=new HashMap<String,String>(); m.put("from",from);
		 * m.put("to",to);
		 * 
		 * RestTemplate temp=new RestTemplate(); ResponseEntity<CalculationBean>
		 * res=temp.getForEntity("http://localhost:8080/exchange/from/{from}/to/{to}",
		 * CalculationBean.class,m); CalculationBean cb=res.getBody(); cb.setQty(qty);
		 * cb.setTotalAmount(qty*cb.getExchangeValue());
		 */
		CalculationBean cb=eProxy.getExchangeValue(from, to);
		cb.setQty(qty);
		cb.setTotalAmount(qty*cb.getExchangeValue());
		return cb;
	}
}
