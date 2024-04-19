package com.argusoft.canteen.server.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.argusoft.canteen.server.model.canteenUser;

import java.util.UUID;

public interface UserRepo extends JpaRepository<canteenUser, UUID> {
    canteenUser findByEmail(String Email);
}
