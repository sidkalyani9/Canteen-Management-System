package com.argusoft.canteen.server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cart")
public class cart {
    
    @Id
    private int user_uuid;
    private int dish_uuid;
    private String paymentMode;
}
