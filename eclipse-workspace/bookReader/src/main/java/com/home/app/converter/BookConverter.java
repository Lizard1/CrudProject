package com.home.app.converter;

import com.home.app.dto.BookDto;
import com.home.app.entity.Book;

public class BookConverter {

	public static BookDto convertBook(Book entity) {
		return new BookDto(entity.getBook_id(), entity.getBookName(), entity.getAuthorName(), entity.getGenre());
	}
}
