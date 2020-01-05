package com.home.app.entity;

import javax.persistence.*;
import javax.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User{

	@Id
	@Column(name = "user_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long user_id;

	@Column(name = "user_login", nullable = false)
	private String userName = "";

	@Size(min = 5, max = 80)
	@Column(name = "user_password", nullable = false)
	private String password = "";

	@Column(name = "user_email")
	private String email;

	@Column(name = "user_libraries", nullable = false)
	private Long libsCount;

	@Column(name = "user_Books", nullable = false)
	private Long booksCount;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "library_id")
	private Library library_users;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "stat_id")
	private Stat stat_user;
}

/*
 * TODO: Добавить роль и состояние(аля забанен или нет).
 * 
 */
