package com.devsuperior.dsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

/**
 * 
 * @author lspeixoto
 *
 *         Services são os responsáveis por implementar todas as regras de
 *         negocios de determinada entidade
 * 
 * @Service registra nosso serviço como um componente do sistema
 */
@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;

	public List<Sale> findSales(String minDate, String maxDate, Pageable pageable) {

		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());

		LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);

		Page<Sale> pageableSales = repository.findSales(min, max, pageable);

		List<Sale> salesContent = pageableSales.getContent();

		return salesContent;
	}
}
