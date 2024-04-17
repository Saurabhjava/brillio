package com.brillio.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.brillio.dao.EmployeeRepository;
import com.brillio.model.Employee;

@Service
public class EmployeeService {

	private EmployeeRepository eRepo;

	public EmployeeService(EmployeeRepository eRepo) {
		super();
		this.eRepo = eRepo;
	}
	
	public List<Employee> getAllEmployee(){
			return eRepo.findAll();
	}
	public Employee getEmployee(int empid) {
		Optional<Employee> op=eRepo.findById(empid);
		if(op.isPresent())
			return op.get();
		else
			return null;
	}
	public Employee createEmployee(Employee emp) {
		return eRepo.saveAndFlush(emp);
	}
	public Employee updateEmployee(Employee emp) {
		if(getEmployee(emp.getEmpid())!=null)
			return eRepo.saveAndFlush(emp);
		else
			return null;
	}
}
