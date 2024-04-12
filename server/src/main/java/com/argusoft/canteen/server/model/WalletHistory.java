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

    @Column(name = "employeeId")
    private String employeeId;

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

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
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
}
