package com.argusoft.canteen.server.service;

import com.argusoft.canteen.server.exceptions.InvalidWallet;
import com.argusoft.canteen.server.model.WalletHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.argusoft.canteen.server.repo.walletHistoryRepo;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class walletHistoryService {

    private final walletHistoryRepo walletRepo;

    @Autowired
    public walletHistoryService(walletHistoryRepo walletRepo){
        this.walletRepo = walletRepo;
    }

    public List<WalletHistory> fetchEmployeeWalletHistory(String emp_id){
        return walletRepo.findByEmployeeId(emp_id);
    }
    public List<WalletHistory> fetchAllWalletHistory(){
        return walletRepo.findAll();
    }

    public WalletHistory insertToWallet(WalletHistory wallet){
        try{
            wallet.setWalletUuid(UUID.randomUUID());
            wallet.setCreatedAt(new Date());
            return walletRepo.save(wallet);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }

//    public void deleteFromWallet(WalletHistory wallet, float amount){
//        float insertAmount = amount * -1;
//        wallet.setAmount(insertAmount);
//        walletRepo.save(wallet);
//        return;
//    }

}
