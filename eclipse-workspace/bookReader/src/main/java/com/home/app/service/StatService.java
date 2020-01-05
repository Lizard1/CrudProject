//package com.scand.app.service;
package com.home.app.service;

import org.springframework.stereotype.Service;

import com.home.app.dto.StatDto;
import com.home.app.entity.Stat;
import com.home.app.repository.StatRepository;

@Service
public class StatService {

	//@Autowired
	private final StatRepository statdao;
	
	public StatService(final StatRepository statdao) {
		this.statdao = statdao;
	}

	public Stat createOrUpdate(StatDto statDto) {
		Stat stat;
		if (statDto.getId() == null)
			stat = new Stat();
		else
			stat = statdao.findById(statDto.getId()).orElse(new Stat());
		
		stat.setDate(statDto.getDate());
		return statdao.save(stat);
	}

	public Stat findById(Long id) {
		return statdao.findById(id).get();
	}

	public Iterable<Stat> findAll() {
		return statdao.findAll();
	}

	public void deleteById(Long id) {
		statdao.deleteById(id);
	}

	public void deleteAll() {
		statdao.deleteAll();
	}

}
