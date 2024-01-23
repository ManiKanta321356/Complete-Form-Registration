package com.manikanta.www.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.manikanta.www.entity.User;
import com.manikanta.www.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5500")
public class UserController {
	
	@Autowired
	UserService us;
	@PostMapping("/register")
	public ResponseEntity<String> saveUser(@RequestBody User user) {
	    us.saveUser(user);
	    return new ResponseEntity<>("User Registered Successfully", HttpStatus.OK);
	}

}
