package com.home.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.home.app.entity.Library;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface LibraryRepository extends JpaRepository<Library, Long> {
}
