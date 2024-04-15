package com;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import config.MyConfiguration;

public class Main {

	public static void main(String[] args) {
		
		/*
		 * ApplicationContext ctx=new ClassPathXmlApplicationContext("bean.xml");
		 * Department dep=(Department)ctx.getBean("dept"); dep.printEmployee();
		 */
		
		ApplicationContext ctx=new AnnotationConfigApplicationContext(MyConfiguration.class);
		
		HelloWorld h=(HelloWorld)ctx.getBean(HelloWorld.class);
		HelloWorld h1=(HelloWorld)ctx.getBean(HelloWorld.class);
		System.out.println(h);
		System.out.println(h1);
		System.out.println(h==h1);
		//Department dep=(Department)ctx.getBean(Department.class); 
		//dep.printEmployee();
		
	}

}
