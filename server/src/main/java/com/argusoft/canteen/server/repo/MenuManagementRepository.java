package com.argusoft.canteen.server.repo;

import com.argusoft.canteen.server.model.MenuManagement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MenuManagementRepository extends JpaRepository<MenuManagement, Long> {
    void deleteItemById(Long id);

    Optional<MenuManagement> findItemById(Long id);
}
