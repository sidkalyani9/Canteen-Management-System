package com.argusoft.canteen.server.repo;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import canteenmanagement.models.Order;

public interface OrderRepo extends JpaRepository<Order, UUID> {


}
