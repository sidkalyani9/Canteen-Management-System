package com.argusoft.canteen.server.controllers;

import com.argusoft.canteen.server.model.WalletHistory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

public interface walletHistoryInterface {
    public ResponseEntity<List<WalletHistory>> getEmployeeWalletHistory(@RequestBody Map<String, Object> requestBody);
    public ResponseEntity<List<WalletHistory>> getAllWalletHistory();
    public ResponseEntity<WalletHistory> addToEmployeeWallet(@RequestBody WalletHistory wallet);
//    public ResponseEntity<WalletHistory> deductFromUserWallet(@RequestBody WalletHistory wallet);

}
