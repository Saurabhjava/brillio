package com.brillio.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brillio.dao.IEmployeeRepository;
import com.brillio.model.Employee;

@Service
public class EmployeeServiceImpl implements IEmployeeService {
	
	
	private IEmployeeRepository empRepo; 	
	
	//@Autowired
	public EmployeeServiceImpl(IEmployeeRepository empRepo) {
		System.out.println("================="+empRepo);
		this.empRepo = empRepo;
	}

	@Override
	public String createEmployee(Employee emp) {
		empRepo.save(emp);
		return "Employee Saved....";
	}

	@Override
	public Employee getEmployee(int empid) {
		Optional<Employee> op=empRepo.findById(empid);
		if(op.isEmpty())
			return null;
		else
			return op.get();
	}

	@Override
	public List<Employee> getAllEmployee() {
		// TODO Auto-generated method stub
		return empRepo.findAll();
	}

	@Override
	public String deleteEmployee(int empid) {
		// TODO Auto-generated method stub
		empRepo.deleteById(empid);
		return "Employee Removed";
	}
	public List<Employee> getEmployeeByName(String name) {
		return empRepo.searchByEmailAddr(name);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
