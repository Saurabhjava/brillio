package com.brillio.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.brillio.Employee;
import com.brillio.EmployeeService;
import com.brillio.InvalidDataException;

public class EmployeeServiceTest {
	private static EmployeeService service;
	@BeforeAll
	public static void init() {
		service=new EmployeeService();
	}
	@Test
	public void createEmployeeNameTest() {
		Employee emp=new Employee();
		emp.setName("");
		emp.setAge(23);
		assertThrows(InvalidDataException.class,()->service.createEmployee(emp));
	}
	@Test
	public void createEmployeeNameTestWithMessage() {
		Employee emp=new Employee();
		emp.setName(null);
		emp.setAge(23);
		Throwable exception=assertThrows(InvalidDataException.class,()->service.createEmployee(emp));
		assertEquals("Invalid Name", exception.getMessage());
	}
}
