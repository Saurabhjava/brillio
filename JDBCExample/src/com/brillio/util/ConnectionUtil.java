package com.brillio.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionUtil {
	private static Connection con;
	
	static {
		try {
			con=DriverManager.getConnection("jdbc:mysql://localhost:3306/brillio","root","root");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static Connection getDbConnection() {
		return con;
	}
}
