package com.argusoft.canteen.server.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import canteenmanagement.models.Order;
import canteenmanagement.repos.OrderRepo;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepo repo;
	
	public List<Order> getAllOrders(){
		return repo.findAll();
	}
	
	public Order addOrder(Order order) {
		return repo.save(order);
	}
	
	public Optional<Order> findOrderById(UUID orderId) {
		return repo.findById(orderId);
	}
	
	public void deleteOrder(UUID orderId) {
        Optional<Order> optionalOrder = repo.findById(orderId);

        if (optionalOrder.isPresent()) {
            Order orderToDelete = optionalOrder.get();
            orderToDelete.setIsArchived(true);
            repo.save(orderToDelete);
        } else {
            throw new RuntimeException("Order not found with id: " + orderId);
        }
    }
	
	
	
	

}
