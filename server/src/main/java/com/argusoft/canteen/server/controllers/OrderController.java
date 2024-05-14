package com.argusoft.canteen.server.controllers;

import java.time.LocalDate;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.argusoft.canteen.server.model.Order;
import com.argusoft.canteen.server.service.OrderService;
import com.argusoft.canteen.server.service.order_dishService;



@RestController
@RequestMapping("/orders")
public class OrderController {
	
	@Autowired
	private OrderService service;

	@Autowired
	private order_dishService order_dishService;
	
	@GetMapping("/getAllOrders")
	 public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = service.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
	
	@PostMapping("/addOrder")
	public ResponseEntity<Order> addOrder(@RequestBody Order order) {
        order.setOrderUuid(UUID.randomUUID());
		order.setCreatedAt(new Date());
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

	@GetMapping("/getTodayStats")
	public ResponseEntity<?> getTodaySales(){
		try{

			Float salesNumber = service.fetchSales();
			Integer todayDishQty = order_dishService.fetchDishQty();
			Map<String, Object> map = new HashMap<>();
			map.put("salesNum", salesNumber);
			map.put("todayDishQty", todayDishQty);
			return new ResponseEntity<>(map,HttpStatus.OK);
		}
		catch (Exception e){
			return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
//			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);


	}
}
