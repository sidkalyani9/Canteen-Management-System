package com.argusoft.canteen.server.jpa;

import com.argusoft.canteen.server.model.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CouponJpa extends JpaRepository<Coupon, Integer> {
}
