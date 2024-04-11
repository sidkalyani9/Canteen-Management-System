package com.argusoft.canteen.server.controllers;

import com.argusoft.canteen.server.model.WalletHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import com.argusoft.canteen.server.service.walletHistoryService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/walletHistory")
public class WalletHistoryController implements walletHistoryInterface {

    private final walletHistoryService walletService;

    @Autowired
    public WalletHistoryController(walletHistoryService service){
        this.walletService = service;
    }
    @Override
    @GetMapping("/getEmployeeWalletHistory")
    public ResponseEntity<List<WalletHistory>> getEmployeeWalletHistory(Map<String, Object> requestBody) {
        try{
            List<WalletHistory> empWalletList = walletService.fetchEmployeeWalletHistory(requestBody.get("employeeId").toString());
            return new ResponseEntity<>(empWalletList,HttpStatus.OK);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @Override
    @GetMapping("/getAllWalletHistory")
    public ResponseEntity<List<WalletHistory>> getAllWalletHistory() {
        try{
            return new ResponseEntity<>(walletService.fetchAllWalletHistory(),HttpStatus.OK);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    @PostMapping("/add")
    public ResponseEntity<WalletHistory> addToEmployeeWallet(@RequestBody WalletHistory wallet) {
        WalletHistory returnedWallet = walletService.insertToWallet(wallet);
        return new ResponseEntity<>(returnedWallet, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<WalletHistory> removeFromEmployeeWallet(WalletHistory wallet) {
        return null;
    }
}
