package com.home.app.controller;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.web.bind.annotation.*;

import com.home.app.converter.StatConverter;
import com.home.app.dto.StatDto;
import com.home.app.entity.Stat;
import com.home.app.service.StatService;

@RestController
@RequestMapping("/stat")
@CrossOrigin(origins = "http://localhost:4200")
public class StatController {

	private final StatService statServ;

	public StatController(final StatService statServ){
		this.statServ = statServ;
	}
	
	@PostMapping("/createup")
	public void createUpdate(@RequestBody StatDto statDto) {
		statServ.createOrUpdate(statDto);
	}

	@GetMapping("/{id}")
	public StatDto findById(@PathVariable("id") Long id) {
		return StatConverter.convertStat(statServ.findById(id));
	}

	@GetMapping("/all")
	public Collection<StatDto> findAll() {
		Collection<StatDto> statDto = new ArrayList<>();
		Iterable<Stat> stats = statServ.findAll();
		for (Stat stat : stats) {
			statDto.add(StatConverter.convertStat(stat));
		}
		return statDto;
	}

	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable("id") Long id) {
		statServ.deleteById(id);
	}

	@DeleteMapping("/delete/all")
	public void deleteAll() {
		statServ.deleteAll();
	}

}
