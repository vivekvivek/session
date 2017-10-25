package com.springdemo.model;

import org.springframework.stereotype.Component;

@Component(value = "helloWorld")
public class HelloWorld {

	public HelloWorld() {
		System.out.println("hello world constructor");
	}

	
	
	
}
