package com.argusoft.canteen.server.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import canteenmanagement.models.walletAdmin;
import canteenmanagement.service.walletAdminService;

@RestController
@RequestMapping("/wallet-admin")
public class walletAdminController {
	
	@Autowired
	private walletAdminService service;

	
	@GetMapping("/getAllWalletItems")
	public List<walletAdmin> getAllWalletItems(){
		return service.getAllWalletItems();
	}

	@GetMapping("/getWalletItemById/{userUuid}")
	public ResponseEntity<walletAdmin> getWalletItemById(@PathVariable UUID userUuid){
		walletAdmin wallet = service.getWalletItemByUuid(userUuid);
		if(wallet != null) {
			return new ResponseEntity<>(wallet, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/createWalletItem")
	public ResponseEntity<walletAdmin> createWalletItem (@RequestBody walletAdmin wallet){
		walletAdmin newWallet = service.saveWalletAdmin(wallet);
		return new ResponseEntity<>(newWallet, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deleteWalletById/{userUuid}")
	public ResponseEntity<Void> deleteWalletById(@PathVariable UUID userUuid){
		walletAdmin wallet = service.getWalletItemByUuid(userUuid);
		if(wallet != null) {
			service.deleteWalletItemById(userUuid);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("/addSameAmountToAll/{amountToAdd}")
	public ResponseEntity<String> addSameAmountToAll(@PathVariable float amountToAdd){
		try {
			service.addSameAmountForAll(amountToAdd);
			return new ResponseEntity<>("Amount added successfully", HttpStatus.OK);
		}
		catch (Exception e) {
			return new ResponseEntity<>("failed to add amount in all wallets", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/addAmountToUser/{amountToAdd}/{userUuid}")
	public ResponseEntity<String> addAmountToUserWallet(@PathVariable float amountToAdd, 
			@PathVariable UUID userUuid){
		try {
			walletAdmin wallet = service.addAmountToUserWallet(userUuid, amountToAdd);
			return new ResponseEntity<>("Amount added successfully in user's wallet", HttpStatus.OK);
		}
		catch (IllegalArgumentException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
		catch (Exception e){
			return new ResponseEntity<>("Failed to add amount in user's wallet", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
