package com.home.app.converter;

import com.home.app.dto.LibraryDto;
import com.home.app.entity.Library;

public class LibraryConverter {

	public static LibraryDto convertLibrary(Library entity) {
		return new LibraryDto(entity.getLibrary_id(), entity.getLibraryName());
	}
}
