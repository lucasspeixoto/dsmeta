package com.devsuperior.dsmeta.utilities;

import org.springframework.stereotype.Service;

@Service
public class FormatService {
	public String completeToLeft(int value, char c, int size) {
		String result = Integer.toString(value);

		if (value < 10) {
			result = '0' + result;
		}

		return result;
	}
}
