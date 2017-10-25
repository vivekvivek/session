package com.springdemo.pizzaOrderSystem;

import org.springframework.stereotype.Component;

@Component
public class GoldenCorn implements Topping {
	
	

	String name = "corn topping";
	
	public String getName() {
		// TODO Auto-generated method stub
		return this.name;
	}

	public void setName(String name) {
	this.name = name;
		
	}

}
