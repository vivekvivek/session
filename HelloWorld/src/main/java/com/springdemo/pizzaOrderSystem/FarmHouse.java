package com.springdemo.pizzaOrderSystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


public class FarmHouse implements Pizza{
	
	
	Topping topping;

	
	public Topping getTopping() {
		return topping;
	}


	public void setTopping(Topping topping) {
		this.topping = topping;
	}


	public void pizzaWithTopping() {
		// TODO Auto-generated method stub
		System.out.println("topping name" +topping.getName());
		
	}

	
	
}
