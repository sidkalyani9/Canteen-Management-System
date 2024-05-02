package com.argusoft.canteen.server.repo;

import com.argusoft.canteen.server.model.MenuManagement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface MenuManagementRepository  extends JpaRepository<MenuManagement, UUID > {
}
