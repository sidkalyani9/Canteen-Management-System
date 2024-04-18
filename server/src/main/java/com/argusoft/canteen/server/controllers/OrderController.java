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
	 public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = service.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
	
	@PostMapping("/addOrder")
	public ResponseEntity<Order> addOrder(@RequestBody Order order) {
        order.setOrderUuid(UUID.randomUUID());
        Order addedOrder = service.addOrder(order);
        return new ResponseEntity<>(addedOrder, HttpStatus.CREATED);
    }
	
	@DeleteMapping("/delete/{orderUuid}")
	 public ResponseEntity<String> deleteOrder(@PathVariable UUID orderUuid) {
		service.deleteOrder(orderUuid);
        return new ResponseEntity<>("order deleted successfully", HttpStatus.NO_CONTENT);
    }
	
	@GetMapping("/getOrderById/{orderUuidId}")
	public ResponseEntity<Order> findOrderById(@PathVariable UUID orderUuidId) {
        Optional<Order> optionalOrder = service.findOrderById(orderUuidId);
        return optionalOrder.map(order -> new ResponseEntity<>(order, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	
	

}
