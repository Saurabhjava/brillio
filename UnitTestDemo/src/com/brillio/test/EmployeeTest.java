package com.brillio.test;

import org.junit.jupiter.api.Test;
import org.meanbean.test.BeanTester;
import org.meanbean.test.EqualsMethodTester;

import com.brillio.Employee;

public class EmployeeTest {
	@Test
	public void testEmployeeBean() {
		BeanTester bean=new BeanTester();
		bean.testBean(Employee.class);
		new EqualsMethodTester().testEqualsMethod(Employee.class);
	}
}
