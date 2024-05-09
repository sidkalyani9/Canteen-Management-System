package com.cart.cart.service;

import com.cart.cart.POJO.Bill;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface BillService {

    ResponseEntity<String> generateReport(Map<String, Object> requestMap );
}
