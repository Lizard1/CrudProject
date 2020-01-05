package com.home.app.dto;

//import com.fasterxml.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class UserDto {
	private Long id;
	private String userName;
	private String password;
	private Long libsCount;
	private Long booksCount;
}
