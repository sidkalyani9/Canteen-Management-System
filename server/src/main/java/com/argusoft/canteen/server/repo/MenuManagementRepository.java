package com.argusoft.canteen.server.repo;

import com.argusoft.canteen.server.model.MenuManagement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Repository
public interface MenuManagementRepository extends JpaRepository<MenuManagement, UUID> {
//    void deleteItemByUuid(UUID id);

    Optional<MenuManagement> findItemByUuid(UUID id);

//    @Query(value = "SELECT SUM(o.amount) AS total_sales FROM orders o WHERE DATE(o.created_at) = CURRENT_DATE", nativeQuery = true)
//    List<MenuManagement> todaysTopTenDishes();
}
