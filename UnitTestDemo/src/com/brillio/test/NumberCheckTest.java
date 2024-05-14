package com.brillio.test;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import com.brillio.NumberCheck;

class NumberCheckTest {
	
	static NumberCheck obj;
	
	@BeforeEach
	public void init() {
		obj=new NumberCheck();
		System.out.println("Object Created..");
	}
	
	@AfterEach
	public void after() {
		System.out.println("Object Destroyed");
		obj=null;
	}
	
	@Test // test case 1
	public void testCheckEvenNumber() {
		System.out.println("Testing Even Number");
		//assumeTrue(false);
		assertEquals("even", obj.checkEvenOrOdd(4));
		
	}
	
	@Test // test case 2
	@Disabled
	public void testCheckOddNumber() {
		System.out.println("Testing Odd Number");
		assertEquals("odd", obj.checkEvenOrOdd(13));
	}

}
