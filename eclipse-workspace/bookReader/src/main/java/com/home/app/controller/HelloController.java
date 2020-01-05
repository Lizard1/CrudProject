package com.home.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloController {
	
    @GetMapping("/")    
    public String index() {
        return "Hello world! This massage lays into HelloController";
    }
    
    @GetMapping("/hello")    
    public String hello() {
        return "Hello world! This massage lays into HelloController";
    }
}
