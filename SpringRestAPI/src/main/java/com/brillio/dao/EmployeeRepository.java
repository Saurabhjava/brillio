package com.brillio.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.brillio.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
