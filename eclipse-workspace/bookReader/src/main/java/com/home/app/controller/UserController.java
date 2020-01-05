package com.home.app.controller;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.home.app.converter.UserConverter;
import com.home.app.dto.UserDto;
import com.home.app.entity.User;
import com.home.app.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	private final UserService userService;

	public UserController(final UserService userService) {
		this.userService = userService;
	}

	@PostMapping("/createup")
	@ResponseStatus(value = HttpStatus.OK)
	public void createUpdate(@RequestBody UserDto userDto) {
		userService.createOrUpdate(userDto);
	}

	@GetMapping("/{id}")
	@ResponseStatus(value = HttpStatus.OK)
	public UserDto findById(@PathVariable("id") Long id) {
		return UserConverter.convertUser(userService.findById(id));
	}

	@GetMapping("/all")
	@ResponseStatus(value = HttpStatus.OK)
	public Collection<UserDto> findAll() {
		Collection<UserDto> usersDto = new ArrayList<>();
		Iterable<User> users = userService.findAll();
		for (User user : users) {
			usersDto.add(UserConverter.convertUser(user));
		}
		return usersDto;
	}

	@DeleteMapping("/delete/{id}")
	@ResponseStatus(value = HttpStatus.OK)
	public void deleteById(@PathVariable("id") Long id) {
		userService.deleteById(id);
	}

	@DeleteMapping("/delete/all")
	@ResponseStatus(value = HttpStatus.OK)
	public void deleteAll() {
		userService.deleteAll();
	}

	@GetMapping(value = "/demo")
	public String privateArea() {
		return "Welcome To OAuth Demo";
	}
}
