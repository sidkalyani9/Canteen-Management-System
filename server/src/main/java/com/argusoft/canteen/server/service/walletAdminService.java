package com.argusoft.canteen.server.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.argusoft.canteen.server.model.walletAdmin;
import com.argusoft.canteen.server.repo.walletAdminRepo;


@Service
public class walletAdminService {
	
	@Autowired
	private walletAdminRepo repo;
	
	public List<walletAdmin> getAllWalletItems(){
		return repo.findAll();
	}
	
	public walletAdmin saveWalletAdmin(walletAdmin wallet) { 
		return repo.save(wallet);
	}

	public walletAdmin getWalletItemByUuid(UUID userUuid) {
		return repo.findById(userUuid).orElse(null);
	}
	
	public void deleteWalletItemById(UUID userUuid) {
		repo.deleteById(userUuid);
	}
	
	public void addSameAmountForAll(float amountToAdd) {
       List<walletAdmin> wallets = repo.findAll();
       for (walletAdmin wallet : wallets) {
    	   wallet.setBalance(wallet.getBalance() + amountToAdd);
    	   repo.save(wallet);
       }
    	   
    }
	
	public walletAdmin addAmountToUserWallet(UUID userUuid, float amountToAdd) {
		Optional<walletAdmin> optionalWallet = repo.findById(userUuid);
		if(optionalWallet.isPresent()) {
			walletAdmin wallet = optionalWallet.get();
			wallet.setBalance(wallet.getBalance() + amountToAdd);
			return repo.save(wallet);
		}
		else {
			throw new IllegalArgumentException("User with UUID " + userUuid + "not found");
		}
	}
}
