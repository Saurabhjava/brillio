package com.brillio.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import com.brillio.CalculatorService;
import com.brillio.ICalulator;

public class CalulatorTest {
	static ICalulator cal;
	
	@BeforeAll
	public static void init() {
		cal=new CalculatorService();
	}
	
	@Test
	public void addTest() {
		//System.out.println(System.getProperty("profile"));
		boolean condition="prod".equalsIgnoreCase(System.getProperty("profile"));
		System.out.println(condition);
		Assumptions.assumeFalse(condition,"Skipping test for PROD profile");
		assertEquals(15, cal.add(10, 5));
	}
	@Test
	public void subTest() {
		assertEquals(5, cal.sub(10, 5));
	}
	@Test
	public void multiplyTest() {
		assertEquals(25, cal.multiply(5, 5));
	}
	@Test
	public void myTest() {
		Assumptions.assumingThat("prod".equalsIgnoreCase(System.getProperty("profile")), ()->{
			assertEquals(3,cal.div(15, 5));
		});
	}
}









