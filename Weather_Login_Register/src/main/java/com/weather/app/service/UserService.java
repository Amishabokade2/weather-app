package com.weather.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weather.app.dto.UserLoginDetails;
import com.weather.app.dto.Users;
import com.weather.app.entity.UsersEntity;
import com.weather.app.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public String createUser(Users user) {

		UsersEntity entity = new UsersEntity();

		entity.setEmailId(user.getEmailId());
		entity.setPassword(user.getPassword());
		entity.setFirstName(user.getFirstName());
		entity.setLastName(user.getLastName());

		userRepository.save(entity);

		return "User Signup Successfully 😊";
	}

	public Users userLogin(UserLoginDetails userLoginDetails) {

		UsersEntity userData = userRepository.findByEmailIdAndPassword(userLoginDetails.getEmailId(),
				userLoginDetails.getPassword());

		Users user = null;
		if (userData != null) {
			user = new Users();
			user.setEmailId(userData.getEmailId());
			user.setFirstName(userData.getFirstName());
			user.setLastName(userData.getLastName());
		}
 
		return user; 
	}

}
