package com.brillio.pl;

import java.util.List;

import com.brillio.dao.EmployeeDaoImpl;
import com.brillio.dao.IEmployeeDao;
import com.brillio.model.Employee;

public class EmployeeMain {

	public static void main(String[] args) {
		IEmployeeDao edao=new EmployeeDaoImpl();
		List<Employee> li=edao.getAll();
		
		li.forEach(e->System.out.println(e));

	}

}
