package com.brillio;

public class CalculatorService implements ICalulator{

	@Override
	public int add(int a, int b) {
		// TODO Auto-generated method stub
		return a+b;
	}

	@Override
	public int sub(int a, int b) {
		// TODO Auto-generated method stub
		return a-b;
	}

	@Override
	public int multiply(int a, int b) {
		// TODO Auto-generated method stub
		return a*b;
	}
	@Override
	public int div(int a, int b) {
		// TODO Auto-generated method stub
		return a/b;
	}

}
