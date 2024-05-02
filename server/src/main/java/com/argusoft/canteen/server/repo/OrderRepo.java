package com.argusoft.canteen.server.repo;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.argusoft.canteen.server.model.Order;
import org.springframework.data.jpa.repository.Query;


public interface OrderRepo extends JpaRepository<Order, UUID> {
    @Query(value = "SELECT SUM(o.amount) AS total_sales FROM orders o WHERE DATE(o.created_at) = CURRENT_DATE", nativeQuery = true)
    Float fetchTodaySales();

}
