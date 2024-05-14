package com.brillio;

public class EmployeeService {
	public String createEmployee(Employee emp) throws InvalidDataException {
		if(emp.getName()==null || emp.getName().length()==0)
			throw new InvalidDataException("Invalid Name");
		else if(emp.getAge()< 18 || emp.getAge()>100)
			throw new InvalidDataException("Invalid Age");
		return "Employee Created";
	}
}
