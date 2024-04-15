package com.brillio.dao;

import java.util.List;

import com.brillio.model.Employee;

public interface IEmployeeDao {
	public List<Employee> getAll();
	public Employee getEmployee(int empid);
	public void createEmployee(Employee emp);
}
