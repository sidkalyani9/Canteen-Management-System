package com.argusoft.canteen.server.repo;

import com.argusoft.canteen.server.model.WalletHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface walletHistoryRepo extends JpaRepository<WalletHistory, UUID> {
    List<WalletHistory> findByEmployeeId(String EmployeeId);
}
