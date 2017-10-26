package com.springdemo.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.springdemo.model.HelloWorld;
import com.springdemo.pizzaOrderSystem.Topping;
import com.springdemo.soundsystem.CDPlayer;
import com.springdemo.soundsystem.CompactDisk;
import com.springdemo.soundsystem.Sony;

public class Test {

	public static void main(String[] args) {

		ApplicationContext applicationContext = new AnnotationConfigApplicationContext(
				com.springdemo.configuration.Config.class);
		ApplicationContext applicationContextwithxml = new ClassPathXmlApplicationContext("Configuration.xml");

		Topping topping = applicationContextwithxml.getBean(Topping.class);
		CDPlayer cdPlayer = (CDPlayer) applicationContext.getBean(Sony.class);

		cdPlayer.start();
		topping.setName("golden corn");
		System.out.println(topping.getName());
		System.out.println("Test Done");
		
		//some changes made by salauddin

	}

}
