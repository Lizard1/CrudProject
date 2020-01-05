package com.home.app.service;

import org.springframework.stereotype.Service;

import com.home.app.dto.LibraryDto;
import com.home.app.entity.Library;
import com.home.app.repository.LibraryRepository;

@Service
public class LibraryService {

	//@Autowired
	private final LibraryRepository libdao;
	
	public LibraryService(final LibraryRepository libdao) {
		this.libdao = libdao;
	}

	public Library createOrUpdate(LibraryDto libraryDto) {
		Library library;
		if (libraryDto.getId() == null)
			library = new Library();
		else
			library = libdao.findById(libraryDto.getId()).orElse(new Library());

		library.setLibraryName(libraryDto.getLibraryName());
		return libdao.save(library);
	}

	public Library findById(Long id) {
		return libdao.findById(id).get();
	}

	public Iterable<Library> findAll() {
		return libdao.findAll();
	}

	public void deleteById(Long id) {
		libdao.deleteById(id);
	}

	public void deleteAll() {
		libdao.deleteAll();
	}

}
