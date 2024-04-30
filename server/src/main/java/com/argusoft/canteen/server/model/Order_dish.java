package com.argusoft.canteen.server.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "order_dish")
public class Order_dish {

    @Id
    @Column(name = "order_uuid", updatable = false, nullable = false)
    private int orderUuid;

    @Column(name = "dish_uuid")
    private List<Integer> dishUuid;

    public int getOrderUuid() {
        return orderUuid;
    }

    public void setOrderUuid(int orderUuid) {
        this.orderUuid = orderUuid;
    }

    public List<Integer> getDishUuid() {
        return dishUuid;
    }

    public void setDishUuid(List<Integer> dishUuid) {
        this.dishUuid = dishUuid;
    }
}
