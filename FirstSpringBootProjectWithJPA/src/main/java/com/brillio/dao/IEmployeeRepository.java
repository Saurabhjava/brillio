package com.brillio.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.brillio.model.Employee;

@Repository
public interface IEmployeeRepository extends JpaRepository<Employee, Integer> {
	@Query("select e from Employee e where e.email=?1")
	public List<Employee> searchByEmailAddr(String name);
}
