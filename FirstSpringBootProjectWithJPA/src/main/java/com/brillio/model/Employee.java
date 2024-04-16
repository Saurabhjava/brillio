package com.brillio.model;

import java.time.LocalDate;

import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "emptable")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int empid;
	@Column(name = "empname")
	private String name;
	private String email;
	private LocalDate dob;
	//@Transient
	//@Length(min = 2)
	//@NotNull
	@NotBlank
	private String city;
	
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Employee() {
		// TODO Auto-generated constructor stub
	}
	
	public Employee(String name, String email, LocalDate dob) {
		super();
		this.name = name;
		this.email = email;
		this.dob = dob;
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
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	@Override
	public String toString() {
		return "Employee [empid=" + empid + ", name=" + name + ", email=" + email + ", dob=" + dob + ", city=" + city
				+ "]";
	}
	
	
}
