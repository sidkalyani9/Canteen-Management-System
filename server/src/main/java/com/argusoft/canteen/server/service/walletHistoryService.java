package com.argusoft.canteen.server.service;

import com.argusoft.canteen.server.exceptions.InvalidWallet;
import com.argusoft.canteen.server.model.WalletHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.argusoft.canteen.server.repo.walletHistoryRepo;
import com.argusoft.canteen.server.repo.UserRepo;
import com.argusoft.canteen.server.model.canteenUser;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class walletHistoryService {

    private final walletHistoryRepo walletRepo;
    private final UserRepo userRepo;
    

    @Autowired
    public walletHistoryService(walletHistoryRepo walletRepo, UserRepo userRepo){
        this.walletRepo = walletRepo;
        this.userRepo  = userRepo;
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

    public void addAmountToAllUsersWallet(int amountToAdd) {
        List<canteenUser> allUsers = userRepo.findAll();
        for (canteenUser user : allUsers) {
            
            String empId = user.getEmployeeId();

            WalletHistory walletEntry = new WalletHistory();
            walletEntry.setWalletUuid(UUID.randomUUID());
            walletEntry.setEmployeeId(user.getEmployeeId());
            walletEntry.setAmount(amountToAdd);
            walletEntry.setCreatedAt(new Date());
            walletEntry.setEmployeeId(empId);

            walletRepo.save(walletEntry);
            
            user.setWallet_amount(amountToAdd + user.getWallet_amount());
            user.setUpdated_at(new Date());
            
            userRepo.save(user);
        }
    }
    
    public void addAmountToUserWallet(String employeeId, int amountToAdd) {
    	Optional<canteenUser> user = userRepo.findByEmployeeId(employeeId);
    	if (user.isPresent()) {
    		canteenUser canteenUser = user.get();
    		
    		WalletHistory walletEntry = new WalletHistory();
    		walletEntry.setWalletUuid(UUID.randomUUID());
    		walletEntry.setEmployeeId(employeeId);
    		walletEntry.setAmount(amountToAdd);
    		walletEntry.setCreatedAt(new Date());
    		
    		walletRepo.save(walletEntry);
    		
    		canteenUser.setWallet_amount(amountToAdd + canteenUser.getWallet_amount());
    		canteenUser.setUpdated_at(new Date());
    		
    		userRepo.save(canteenUser);
    	}
    }

//    public void deleteFromWallet(WalletHistory wallet, float amount){
//        float insertAmount = amount * -1;
//        wallet.setAmount(insertAmount);
//        walletRepo.save(wallet);
//        return;
//    }

}
