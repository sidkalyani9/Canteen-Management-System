package com.argusoft.canteen.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.argusoft.canteen.server.repo.Order_dishRepo;

@Service
public class order_dishService {

    private final Order_dishRepo repo;

    @Autowired
    public order_dishService(Order_dishRepo order_dishRepo){
        this.repo = order_dishRepo;
    }

    public Integer fetchDishQty(){
        Integer todayDishQty = repo.fetchTodayDishQty();
        if(todayDishQty == null){
            todayDishQty = 0;
        }
        return todayDishQty;
    }
}
