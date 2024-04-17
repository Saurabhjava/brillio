package com.brillio.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;

@Entity
public class CurrencyExchange {
	@Id
	private int id;
	@Column(name = "currencyFrom")
	private String from;
	@Column(name = "currencyTo")
	private String to;
	private double exchangeValue;
	@Transient
	private int port;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public double getExchangeValue() {
		return exchangeValue;
	}
	public void setExchangeValue(double exchangeValue) {
		this.exchangeValue = exchangeValue;
	}
	public int getPort() {
		return port;
	}
	public void setPort(int port) {
		this.port = port;
	}
	
	
}
