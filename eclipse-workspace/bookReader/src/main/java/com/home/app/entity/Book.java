package com.home.app.entity;

//import java.util.*;
import javax.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "book")
public class Book {

	@Id
	@Column(name="book_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long book_id;

	@Column(name = "book_name", nullable = false)
	private String bookName = "";

	@Column(name = "author_name", nullable = false)
	private String authorName = "";
	
	@Column(name = "genre", nullable = false)
	private String genre = "";

	@ManyToOne(fetch = FetchType.LAZY)	 
	@JoinColumn(name = "library_id")
	private Library library_books;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "stat_id")
	private Stat stat_book;
}
