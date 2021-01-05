package com.devventura.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devventura.dsdeliver.dto.OrderDTO;
import com.devventura.dsdeliver.entities.Order;
import com.devventura.dsdeliver.repositories.OrderRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository respository; 
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> list = respository.findOrderWithProducts();
		return list.stream().map(x-> new OrderDTO(x)).collect(Collectors.toList());
	}
}
