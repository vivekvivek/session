package com.springdemo.soundsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Sony implements CDPlayer {

	@Autowired
	CompactDisk cd;
	
	public void start() {
		cd.play();
	}
	
}
