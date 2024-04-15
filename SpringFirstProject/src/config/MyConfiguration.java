package config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.Department;
import com.Employee;
import com.HelloWorld;

@Configuration
@ComponentScan("com")
public class MyConfiguration {	
	
	/*
	 * @Bean(value = "hello") public HelloWorld getHelloWorld() { return new
	 * HelloWorld(); }
	 * 
	 * @Bean public Department getDept() { return new Department(121,"HR"); }
	 * 
	 * @Bean public Employee getEmp() { return new Employee(101, "Amit",
	 * "amit@gmail.com"); }
	 * 
	 * @Bean public Employee employee() { return new Employee(102, "Chirag",
	 * "chirag@gmail.com"); }
	 */
}
