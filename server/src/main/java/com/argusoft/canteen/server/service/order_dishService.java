package com.argusoft.canteen.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.argusoft.canteen.server.repo.Order_dishRepo;

@Service
public class order_dishService {

    private final Order_dishRepo order_dishRepo;

    @Autowired
    public order_dishService(Order_dishRepo order_dishRepo){
        this.order_dishRepo = order_dishRepo;
    }
}
