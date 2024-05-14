package com.argusoft.canteen.server.controllers;

import com.argusoft.canteen.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.argusoft.canteen.server.model.canteenUser;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {

    public UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }
    @PostMapping("/getUserByEmail")
    public ResponseEntity<canteenUser> fetchUserByEmail(@RequestBody Map<String,Object> requestBody){
        try{
            String email = requestBody.get("email").toString();
            canteenUser userDetails = userService.getUser(email);
            return new ResponseEntity<>(userDetails, HttpStatus.OK);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping("/add")
    public ResponseEntity<canteenUser> saveUser(@RequestBody canteenUser user){
        try{
            canteenUser userDetails = userService.insertUser(user);
            return new ResponseEntity<>(userDetails, HttpStatus.OK);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/findAllUser")
    public ResponseEntity<List<canteenUser>> findAllUser(){
    	return new ResponseEntity<>(userService.findAllUser(), HttpStatus.OK);
    }
}
