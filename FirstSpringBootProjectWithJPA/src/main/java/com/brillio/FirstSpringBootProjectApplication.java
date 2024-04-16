package com.brillio;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.brillio.model.Answer;
import com.brillio.model.Employee;
import com.brillio.model.Question;
import com.brillio.service.EmployeeServiceImpl;
import com.brillio.service.IEmployeeService;
import com.brillio.service.QuestionService;

@SpringBootApplication
public class FirstSpringBootProjectApplication {

	public static void main(String[] args) {
		ApplicationContext ctx= SpringApplication.run(FirstSpringBootProjectApplication.class, args);
		QuestionService q=ctx.getBean(QuestionService.class);
		/*
		 * Question que=new Question("What is Spring", 2); List<Answer> li=new
		 * ArrayList<Answer>(); li.add(new Answer("Spring is IOC", "Saurabh",que));
		 * li.add(new Answer("Spring is a java framework", "Chirag",que));
		 * 
		 * que.setAnswer(li); q.createQuestion(que);
		 * System.out.println("===============Done==============");
		 */
		System.out.println(q.removeQuestion(2));
		
		
	}

}
