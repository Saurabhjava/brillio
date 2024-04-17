package com.brillio.api;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brillio.model.Employee;
import com.brillio.service.EmployeeService;

@RestController
@RequestMapping("employees")
public class EmployeeController {
	private EmployeeService eservice;
	
	public EmployeeController(EmployeeService eservice) {
		super();
		this.eservice = eservice;
	}

	@GetMapping
	public List<Employee> allEmployee() {		
		return eservice.getAllEmployee();
	}
	@GetMapping("/{eid}")
	public Employee allEmployeeById(@PathVariable("eid") int empid) {		
		return eservice.getEmployee(empid);
	}
}
