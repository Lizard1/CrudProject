package com.home.app.entity;

import java.util.Date;
import java.util.Set;

import javax.persistence.*;
import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "stat")
public class Stat {

	@Id
	@Column(name = "stat_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long stat_id;

	@Column(name = "date_time")
	@Temporal(TemporalType.DATE)
	private Date date;

	@OneToMany(mappedBy = "stat_book")
	private Set<Book> book;
	
	@OneToMany(mappedBy = "stat_user")
	private Set<User> user;	
}
