package com.brillio.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.brillio.model.Employee;
import com.brillio.util.ConnectionUtil;

public class EmployeeDaoImpl implements IEmployeeDao {
	Connection con=ConnectionUtil.getDbConnection();
	@Override
	public List<Employee> getAll() {
		List<Employee> empList=new ArrayList<Employee>();
		try {
			Statement stat=con.createStatement();
			ResultSet rs=stat.executeQuery("select * from Employee");
			while(rs.next()) {
				empList.add(new Employee(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getDate(4), rs.getInt(5), rs.getString(6)));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return empList;
	}

	@Override
	public Employee getEmployee(int empid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void createEmployee(Employee emp) {
		// TODO Auto-generated method stub
		
	}

}
