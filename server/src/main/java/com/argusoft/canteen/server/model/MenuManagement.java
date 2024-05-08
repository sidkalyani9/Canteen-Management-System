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
<<<<<<< HEAD
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "dish_uuid", updatable = false)
    private UUID dish_uuid;

    @Column(name = "dish_name")
    private String dish_name;
=======
    @Column(nullable = false, updatable = false)
    private UUID uuid;
>>>>>>> sid

    @Column(name = "category_name")
    private String category_name;

    @Column(name = "description")
    private String description;

    @Column(name = "image_url")
    private String image_url;

    @Column(name = "price")
    private Integer price;

<<<<<<< HEAD
    @Column(name = "rating")
    private Float rating;

    @Column(name = "created_at")
    private Date created_at;
=======
    @Column(name = "createdOn")
    private Date createdOn;
>>>>>>> sid

    @Column(name = "updated_at")
    private Date updated_at;


    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public Date getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(Date updatedOn) {
        this.updatedOn = updatedOn;
    }
}
