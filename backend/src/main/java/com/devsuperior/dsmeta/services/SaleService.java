package com.devsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

/**
 * 
 * @author lspeixoto
 *
 * Services são os responsáveis por implementar
 * todas as regras de negocios de determinada 
 * entidade
 * 
 * @Service registra nosso serviço como um componente
 * do sistema
 */
@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	public List<Sale> findSales() {
		return repository.findAll();
	}
}
