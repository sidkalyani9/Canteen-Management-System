package com.argusoft.canteen.server.controllers;

import com.argusoft.canteen.server.model.Coupon;
import com.argusoft.canteen.server.service.CouponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Coupons")
public class CouponController {
    private final CouponService CouponService;
    @Autowired
    public CouponController(com.argusoft.canteen.server.service.CouponService couponService) {
        CouponService = couponService;
    }
    @GetMapping("/allCoupons")
    public ResponseEntity<List<Coupon>>getallCoupons(){
        List<Coupon> coupons=CouponService.findallCoupons();
        return new ResponseEntity<>(coupons, HttpStatus.OK);
    }

    @PostMapping("/addCoupon")
    public ResponseEntity<Coupon> addCoupon(@RequestBody Coupon coupon) {
        Coupon newCoupon = CouponService.addCoupon(coupon);
        return new ResponseEntity<>(newCoupon, HttpStatus.OK);
    }

    @PutMapping("/updateCoupon")
    public ResponseEntity<Coupon> updateCoupon(@RequestBody Coupon coupon) {
        Coupon newCoupon = CouponService.addCoupon(coupon);
        return new ResponseEntity<>(newCoupon, HttpStatus.OK);
    }
    @DeleteMapping("/deleteCoupon/{couponId}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("couponId") int couponId){
        CouponService.deleteCoupon(couponId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
