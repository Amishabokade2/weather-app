package com.weather.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.weather.app.entity.UsersEntity;

@Repository
public interface UserRepository extends JpaRepository<UsersEntity, String> {
	
	UsersEntity findByEmailIdAndPassword(String emailId, String password);
}
 