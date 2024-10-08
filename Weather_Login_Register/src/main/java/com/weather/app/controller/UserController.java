package com.weather.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.weather.app.dto.UserLoginDetails;
import com.weather.app.dto.Users;
import com.weather.app.service.UserService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/")
public class UserController {

	// User SignUp

	@Autowired
	private UserService userService;

	@PostMapping("/user/signup")
	public ResponseEntity<String> createUser(@RequestBody Users user) {
//		System.out.println("User Details : SignUp : " + user);

		String result = userService.createUser(user);

		return new ResponseEntity<String>(result, HttpStatus.CREATED);
	}
	
	@PostMapping("/user/login")
	public ResponseEntity<Users> userLogin(@RequestBody UserLoginDetails userLoginDetails){
		
		Users userData =  userService.userLogin(userLoginDetails);
		
		if(userData != null) {
			return new ResponseEntity<Users>(userData,HttpStatus.OK);  
		} 

		return new ResponseEntity<Users>(userData,HttpStatus.UNAUTHORIZED);
	}
} 
