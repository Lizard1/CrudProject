package com.home.app.controller;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.web.bind.annotation.*;

import com.home.app.converter.LibraryConverter;
import com.home.app.dto.LibraryDto;
import com.home.app.entity.Library;
import com.home.app.service.LibraryService;

@RestController
@RequestMapping("/library")
@CrossOrigin(origins = "http://localhost:4200")
public class LibraryController {

	private final LibraryService libService;

	public LibraryController(final LibraryService libservice) {
		this.libService = libservice;
	}
	
	@PostMapping("/createup")
	public void createUpdate(@RequestBody LibraryDto libraryDto) {
		libService.createOrUpdate(libraryDto);
	}

	@GetMapping("/{id}")
	public LibraryDto findById(@PathVariable("id") Long id) {
		return LibraryConverter.convertLibrary(libService.findById(id));
	}

	@GetMapping("/all")
	public Collection<LibraryDto> findAll() {
		Collection<LibraryDto> libsDto = new ArrayList<>();
		Iterable<Library> libs = libService.findAll();
		for (Library library : libs) {
			libsDto.add(LibraryConverter.convertLibrary(library));
		}
		return libsDto;
	}

	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable("id") Long id) {
		libService.deleteById(id);
	}
	
	@DeleteMapping("/delete/all")
	public void deleteAll() {
		libService.deleteAll();
	}
}
