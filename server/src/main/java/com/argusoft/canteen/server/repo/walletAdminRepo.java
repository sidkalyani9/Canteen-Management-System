package com.argusoft.canteen.server.repo;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import canteenmanagement.models.walletAdmin;

@Repository
public interface walletAdminRepo extends JpaRepository<walletAdmin, UUID>{

}
