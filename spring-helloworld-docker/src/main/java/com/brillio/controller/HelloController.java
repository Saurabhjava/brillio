package com.brillio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("hello")
public class HelloController {
	@GetMapping
	public String sayHello() {
		return "Hello! This app is ruuning in docker container";
	}
	@GetMapping("/{name}")
	public String greet(@PathVariable String name) {
		return "Hello! "+name;
	}
}
