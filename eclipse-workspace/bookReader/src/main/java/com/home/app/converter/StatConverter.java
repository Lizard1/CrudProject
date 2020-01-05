package com.home.app.converter;

import com.home.app.dto.StatDto;
import com.home.app.entity.Stat;

public class StatConverter {

	public static StatDto convertStat(Stat entity) {
		return new StatDto(entity.getStat_id(), entity.getDate());
	}
}
