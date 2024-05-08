package com.brillio.api;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brillio.model.MyUser;
import com.brillio.sevice.UserService;

@RestController
@RequestMapping("users")
@CrossOrigin("*")
public class UserApi {
	private UserService userService;
	
	public UserApi(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@GetMapping
	public List<MyUser> getAllUsers(){
		return userService.allUser();
	}
	@PostMapping("/login")
	public String validateUser(@RequestBody MyUser user) {
		return userService.validate(user);
	}
}
