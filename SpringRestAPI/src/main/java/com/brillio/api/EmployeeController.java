package com.brillio.api;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PutExchange;

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
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("eid") int empid) {
		Employee e=eservice.getEmployee(empid);
		if(e!=null)
			return new ResponseEntity<Employee>(e, HttpStatus.OK); 
		else
			return new ResponseEntity("Employee Not Available", HttpStatus.NOT_FOUND);
	}
	@PostMapping
	public ResponseEntity<Employee> newEmployee(@RequestBody Employee emp) {
		
		return new ResponseEntity<Employee>(eservice.createEmployee(emp),HttpStatus.CREATED);
	}
	@PutMapping
	public ResponseEntity<Employee> updateEmployee(@RequestBody Employee emp) {
		Employee e=eservice.updateEmployee(emp);
		if(e!=null)
			return new ResponseEntity<Employee>(e,HttpStatus.OK);
		else
			return new ResponseEntity("Employee Not Found",HttpStatus.NOT_FOUND);
	}
}













