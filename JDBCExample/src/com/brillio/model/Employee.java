package com.brillio.model;

import java.sql.Date;

public class Employee {
	
	private int empid;
	private String name;
	private String email;
	private Date dob;
	private double salary;
	private String city;
	
	public Employee() {
		
	}
	public Employee(int empid, String name, String email, Date dob, double salary, String city) {
		super();
		this.empid = empid;
		this.name = name;
		this.email = email;
		this.dob = dob;
		this.salary = salary;
		this.city = city;
	}
	public int getEmpid() {
		return empid;
	}
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	@Override
	public String toString() {
		return "Employee [empid=" + empid + ", name=" + name + ", email=" + email + ", dob=" + dob + ", salary="
				+ salary + ", city=" + city + "]";
	}
	
	

}
