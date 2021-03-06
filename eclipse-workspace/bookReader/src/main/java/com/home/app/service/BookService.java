package com.home.app.service;

import org.springframework.stereotype.Service;

import com.home.app.dto.BookDto;
import com.home.app.entity.Book;
import com.home.app.repository.BookRepository;

@Service
public class BookService {

	private final BookRepository bookdao;
	
	public BookService(final BookRepository bookdao) {
		this.bookdao = bookdao;
	}
	
	public Book createOrUpdate(BookDto bookdto) { // upset
		Book book;
		if (bookdto.getId() == null)
			book = new Book();
		else
			book = bookdao.findById(bookdto.getId()).orElse(new Book());			

		book.setBookName(bookdto.getBookName());
		book.setAuthorName(bookdto.getAuthorName());
		book.setGenre(bookdto.getGenre());
		return bookdao.save(book);
	}

	public Book findById(Long id) {
		return bookdao.findById(id).get();
	}

	public Iterable<Book> findAll() {
		return bookdao.findAll();
	}

	public void deleteById(Long id) {
		bookdao.deleteById(id);
	}

	public void deleteAll() {
		bookdao.deleteAll();
	}
}
