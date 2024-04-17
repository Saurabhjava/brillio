package com.brillio.model;

public class CalculationBean {
	private String from;
	private String to;
	private double qty;
	private double exchangeValue;
	private double totalAmount;
	private int port;
	
	public CalculationBean() {
		
	}
	public CalculationBean(String from, String to, double qty, double exchangeValue, double totalAmount, int port) {
		super();
		this.from = from;
		this.to = to;
		this.qty = qty;
		this.exchangeValue = exchangeValue;
		this.totalAmount = totalAmount;
		this.port = port;
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
	public double getQty() {
		return qty;
	}
	public void setQty(double qty) {
		this.qty = qty;
	}
	public double getExchangeValue() {
		return exchangeValue;
	}
	public void setExchangeValue(double exchangeValue) {
		this.exchangeValue = exchangeValue;
	}
	public double getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}
	public int getPort() {
		return port;
	}
	public void setPort(int port) {
		this.port = port;
	}
	
	
}
