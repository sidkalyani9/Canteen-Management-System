package com.argusoft.canteen.server.service;

import com.argusoft.canteen.server.repo.CouponJpa;
import com.argusoft.canteen.server.model.Coupon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CouponService {
    private final CouponJpa CouponJpa;
    @Autowired
    public CouponService(CouponJpa couponJpa) {
        CouponJpa = couponJpa;
    }
    //CRUD FUNCTIONS
    public Coupon addCoupon(Coupon coupon){
        coupon.setCouponCode(UUID.randomUUID().toString().substring(0,5));
        return CouponJpa.save(coupon);
    }
    public Coupon updateCoupon(Coupon coupon){
        return CouponJpa.save(coupon);
    }
    public List<Coupon> findallCoupons(){
       return CouponJpa.findAll();
    }
    public void deleteCoupon(int couponId){
        CouponJpa.deleteById(couponId);
    }
}
