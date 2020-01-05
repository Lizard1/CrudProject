package com.home.app.dto;

import java.util.Date;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class StatDto {
	private Long id;
	private Date date;
}
