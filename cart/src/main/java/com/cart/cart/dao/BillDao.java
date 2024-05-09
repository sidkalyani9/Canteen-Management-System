package com.cart.cart.dao;

import com.cart.cart.POJO.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillDao extends JpaRepository<Bill, Integer> {  
}
