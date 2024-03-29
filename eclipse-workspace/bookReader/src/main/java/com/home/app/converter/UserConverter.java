package com.home.app.converter;

import com.home.app.dto.UserDto;
import com.home.app.entity.User;

public class UserConverter {

	public static UserDto convertUser(User entity) {
		return new UserDto(entity.getUser_id(), entity.getUserName(), entity.getPassword(), entity.getLibsCount(),
				entity.getBooksCount());
	}
}
