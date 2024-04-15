package com;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
@Scope("prototype")
public class HelloWorld {
	public String sayHello(String name) {
		return "Hello "+name+" !";
	}
}
