package com.argusoft.canteen.server.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;
import java.util.UUID;

@Entity
@Table
public class WalletHistory {
    @Id
    @Column(name = "wallet_uuid", updatable = false, nullable = false)
    private UUID walletUuid;

    @Column(name = "user_uuid")
    private UUID userUuid;

    @Column(name = "amount")
    private float amount;
    @Column(name = "created_at")
    private Date createdAt;

    public UUID getWalletUuid() {
        return walletUuid;
    }

    public void setWalletUuid(UUID walletUuid) {
        this.walletUuid = walletUuid;
    }

    public UUID getUserUuid() {
        return userUuid;
    }

    public void setUserUuid(UUID userUuid) {
        this.userUuid = userUuid;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public WalletHistory() {
    }
}
