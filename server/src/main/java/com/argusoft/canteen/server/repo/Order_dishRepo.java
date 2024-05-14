package com.argusoft.canteen.server.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.argusoft.canteen.server.model.Order_dish;
import org.springframework.data.jpa.repository.Query;

import java.util.UUID;

public interface Order_dishRepo extends JpaRepository<Order_dish , UUID> {

    @Query(value = "SELECT SUM(o.qty) AS totalDish FROM order_dish o, orders ord WHERE DATE(ord.created_at) = CURRENT_DATE and ord.order_uuid = o.order_uuid", nativeQuery = true)
    Integer fetchTodayDishQty();

} 