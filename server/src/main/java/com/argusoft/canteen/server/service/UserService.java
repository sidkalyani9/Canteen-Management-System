package com.argusoft.canteen.server.service;

import com.argusoft.canteen.server.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.argusoft.canteen.server.model.canteenUser;

import java.util.Date;
import java.util.UUID;

@Service
public class UserService {
    private final UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo){
        this.userRepo = userRepo;
    }

    public canteenUser getUser(String email){
        return userRepo.findByEmail(email);
    }

    public canteenUser insertUser(canteenUser user){
        user.setUser_uuid(UUID.randomUUID());
        user.setCreated_at(new Date());
        return userRepo.save(user);
    }
}
