package com.argusoft.canteen.server.controllers;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.argusoft.canteen.server.model.Order;
import com.argusoft.canteen.server.service.OrderService;



@RestController
@RequestMapping("/orders")
public class OrderController {
	
	@Autowired
	private OrderService service;
	
	@GetMapping("/getAllOrders")
	public List<Order> getAllOrders(){
		return service.getAllOrders();
	}
	
	@PostMapping("/addOrder")
	public Order addOrder(@RequestBody Order order) {
		order.setOrderUuid(UUID.randomUUID());
//		order.setCreatedAt(new Date());
		return service.addOrder(order);
	}
	
	@DeleteMapping("/delete/{orderUuid}")
	public void deleteOrder(@PathVariable UUID orderUuid) {
		service.deleteOrder(orderUuid);
	}
	
	@GetMapping("/getOrderById/{orderUuidId}")
	public Optional<Order> findOrderById(@PathVariable UUID orderUuidId) {
		return service.findOrderById(orderUuidId);
		
	}
	
	

}
