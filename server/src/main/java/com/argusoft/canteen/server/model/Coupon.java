package com.argusoft.canteen.server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;
@Entity
@Table(name="Coupons")
public class Coupon {
@Id
    private int couponId;
    private String couponName;
    private Date activeTill;
    private String description ;
    private String discountType;
    private long deductionAmount;
    private  long minValue;

    public int getCouponId() {
        return couponId;
    }

    public void setCouponId(int couponId) {
        this.couponId = couponId;
    }

    public String getCouponName() {
        return couponName;
    }

    public void setCouponName(String couponName) {
        this.couponName = couponName;
    }

    public Date getActiveTill() {
        return activeTill;
    }

    public void setActiveTill(Date activeTill) {
        this.activeTill = activeTill;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDiscountType() {
        return discountType;
    }

    public void setDiscountType(String discountType) {
        this.discountType = discountType;
    }

    public long getDeductionAmount() {
        return deductionAmount;
    }

    public void setDeductionAmount(long deductionAmount) {
        this.deductionAmount = deductionAmount;
    }

    public long getMinValue() {
        return minValue;
    }

    public void setMinValue(long minValue) {
        this.minValue = minValue;
    }

    @Override
    public String toString() {
        return "Coupon{" +
                "couponId=" + couponId +
                ", couponName='" + couponName + '\'' +
                ", activeTill=" + activeTill +
                ", description='" + description + '\'' +
                ", discountType='" + discountType + '\'' +
                ", deductionAmount=" + deductionAmount +
                ", minValue=" + minValue +
                '}';
    }

    public Coupon(int couponId, String couponName, Date activeTill, String description, String discountType, long deductionAmount, long minValue) {
        this.couponId = couponId;
        this.couponName = couponName;
        this.activeTill = activeTill;
        this.description = description;
        this.discountType = discountType;
        this.deductionAmount = deductionAmount;
        this.minValue = minValue;
    }

    public Coupon() {
    }
}
