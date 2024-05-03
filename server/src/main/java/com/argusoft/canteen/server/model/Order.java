package com.argusoft.canteen.server.model;

import java.util.Date;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "orders")
public class Order {
	
	@Id
	@Column(name = "order_uuid", updatable = false, nullable = false)
	private UUID orderUuid;
	
//
//	@Column(name = "order_dish_uuid", updatable = false, nullable = false)
//	private UUID orderDishUuid;
//
	
	@Column(name = "user_uuid", updatable = false, nullable = false)
	private UUID userUuid;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="created_at")
	private Date createdAt;
	
	@Column(name = "is_archived")
	private Boolean isArchived;	
	
	@Column(name = "payment_mode")
	private String paymentMode;
	
	@Column(name = "amount")
	private float amount;
	
	

	public Order() {}

	public Order(UUID orderUuid
//			, UUID orderDishUuid,
				 ,UUID userUuid,
				 Date createdAt,
				 Boolean isArchived,
				 String paymentMode,
				 float amount) {
		this.orderUuid = orderUuid;
//		this.orderDishUuid = orderDishUuid;
		this.userUuid = userUuid;
		this.createdAt = createdAt;
		this.isArchived = isArchived;
		this.paymentMode = paymentMode;
		this.amount = amount;
	}

	public UUID getOrderUuid() {
		return orderUuid;
	}

	public void setOrderUuid(UUID orderUuid) {
		this.orderUuid = orderUuid;
	}

//	public UUID getOrderDishUuid() {
//		return orderDishUuid;
//	}
//
//	public void setOrderDishUuid(UUID orderDishUuid) {
//		this.orderDishUuid = orderDishUuid;
//	}

	public UUID getUserUuid() {
		return userUuid;
	}

	public void setUserUuid(UUID userUuid) {
		this.userUuid = userUuid;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Boolean getIsArchived() {
		return isArchived;
	}

	public void setIsArchived(Boolean isArchived) {
		this.isArchived = isArchived;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}
	
	@PrePersist
	protected void onCreate() {
	    createdAt = new Date();
	}
	
	
	

}