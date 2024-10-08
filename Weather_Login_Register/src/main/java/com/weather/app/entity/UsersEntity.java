package com.weather.app.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="users")
public class UsersEntity {
	
	@Id
	private String emailId;
	
	private String firstName;

	private String lastName;

	private String password;
}
