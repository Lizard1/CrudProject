package com.home.app.entity;

import java.util.Set;

import javax.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "library")
public class Library {
	
	@Id
	@Column(name = "library_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long library_id;
	
	@Column(name = "library_name", nullable = false)
	private String libraryName = "";

	@OneToMany(mappedBy = "library_users")
	private Set<User> users;

	@OneToMany(mappedBy = "library_books")
	private Set<Book> books;

}
