package com.argusoft.canteen.server.model;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "wallet_admin")
public class walletAdmin {
	
	@Id
	@Column(name = "user_uuid", updatable = false, nullable = false)
	private UUID userUuid;
	
	@Column(name = "user_name")
	private String userName;
	
	@Column(name = "user_balance")
	private float balance;

	public walletAdmin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public walletAdmin(UUID userUuid, String username, float balance) {
		super();
		this.userUuid = userUuid;
		userName = username;
		this.balance = balance;
	}

	public UUID getUserUuid() {
		return userUuid;
	}

	public void setUserUuid(UUID userUuid) {
		this.userUuid = userUuid;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public float getBalance() {
		return balance;
	}

	public void setBalance(float balance) {
		this.balance = balance;
	}
}
