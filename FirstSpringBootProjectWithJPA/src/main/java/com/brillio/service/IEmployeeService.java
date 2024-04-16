package com.brillio.service;

import java.util.List;

import com.brillio.model.Employee;


public interface IEmployeeService {
	public String createEmployee(Employee emp);
	public Employee getEmployee(int empid);
	public List<Employee> getAllEmployee();
	public String deleteEmployee(int empid);
	public List<Employee> getEmployeeByName(String name);
}
