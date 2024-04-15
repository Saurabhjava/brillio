package com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Department {
	private int deptId;
	private String deptName;
	@Autowired
	//@Qualifier("getEmp1")
	private Employee employee;
	
	public Department() {
		
	}
	public Department(int deptId, String deptName) {
		super();
		this.deptId = deptId;
		this.deptName = deptName;
	}
	public int getDeptId() {
		return deptId;
	}
	public void setDeptId(int deptId) {
		this.deptId = deptId;
	}
	public String getDeptName() {
		return deptName;
	}
	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}
	public Employee getEmployee() {
		return employee;
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	
	public void printEmployee() {
		System.out.println("===============DeptId:"+deptId+" Dept Name:"+deptName+"===============" );
		System.out.println("EmployeeId="+employee.getEmpid());
		System.out.println("EmployeeName="+employee.getName());
		System.out.println("EmployeeName="+employee.getEmail());
	}
}
