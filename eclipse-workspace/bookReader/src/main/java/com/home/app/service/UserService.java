package com.home.app.service;
import org.springframework.stereotype.Service;

import com.home.app.dto.UserDto;
import com.home.app.entity.User;
import com.home.app.repository.UserRepository;

@Service("userDetailsService")
public class UserService{

	//@Autowired
	private final UserRepository userRepo;

	public UserService(final UserRepository userdao) {
		this.userRepo = userdao;
	}
	
	public User createOrUpdate(UserDto userDto) {
		User user;
		if (userDto.getId() == null)
			user = new User();
		else
			user = userRepo.findById(userDto.getId()).orElse(new User());

		user.setUserName(userDto.getUserName());
		user.setPassword(userDto.getPassword());
		user.setLibsCount(userDto.getLibsCount());
		user.setBooksCount(userDto.getBooksCount());
		return userRepo.save(user);
	}

	public User findById(Long id) {
		return userRepo.findById(id).get();
	}	
	
	

	public Iterable<User> findAll() {
		return userRepo.findAll();
	}

	public void deleteById(Long id) {
		userRepo.deleteById(id);
	}

	public void deleteAll() {
		userRepo.deleteAll();
	}
}
