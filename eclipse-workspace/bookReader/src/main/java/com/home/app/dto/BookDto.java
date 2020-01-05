package com.home.app.dto;

//import com.fasterxml.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class BookDto {
	private Long id;
	private String bookName;
	private String authorName;
	private String genre;
}
