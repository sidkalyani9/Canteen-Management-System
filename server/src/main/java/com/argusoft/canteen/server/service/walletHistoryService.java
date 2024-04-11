package com.argusoft.canteen.server.service;

import com.argusoft.canteen.server.model.WalletHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.argusoft.canteen.server.repo.walletHistoryRepo;

import java.util.UUID;

@Service
public class walletHistoryService {

    private final walletHistoryRepo walletRepo;

    @Autowired
    public walletHistoryService(walletHistoryRepo walletRepo){
        this.walletRepo = walletRepo;
    }

    public WalletHistory insertToWallet(WalletHistory wallet){
        wallet.setWalletUuid(UUID.randomUUID());
        return walletRepo.save(wallet);
    }

}
