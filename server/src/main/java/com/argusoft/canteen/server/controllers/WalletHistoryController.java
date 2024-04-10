package com.argusoft.canteen.server.controllers;

import com.argusoft.canteen.server.model.WalletHistory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/walletHistory")
public class WalletHistoryController implements walletHistoryInterface {
    @Override
    public ResponseEntity<WalletHistory> getEmployeeWalletHistory(Map<String, Object> requestBody) {
        return null;
    }

    @Override
    public ResponseEntity<List<WalletHistory>> getAllWalletHistory() {
        return null;
    }

    @Override
    public ResponseEntity<WalletHistory> addToEmployeeWallet(WalletHistory wallet) {
        return null;
    }

    @Override
    public ResponseEntity<WalletHistory> removeFromEmployeeWallet(WalletHistory wallet) {
        return null;
    }
}
