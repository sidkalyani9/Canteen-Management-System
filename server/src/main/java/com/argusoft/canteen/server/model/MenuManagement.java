package com.argusoft.canteen.server.model;

import jakarta.persistence.*;
import lombok.Data;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Data
@Entity
@Table(name = "MenuManagement")
public class MenuManagement implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "dish_uuid", updatable = false)
    private UUID dish_uuid;

    @Column(name = "dish_name")
    private String dish_name;

    @Column(name = "category_name")
    private String category_name;

    @Column(name = "description")
    private String description;

    @Column(name = "image_url")
    private String image_url;

    @Column(name = "price")
    private Integer price;

    @Column(name = "rating")
    private Float rating;

    @Column(name = "created_at")
    private Date created_at;

    @Column(name = "updated_at")
    private Date updated_at;

}
