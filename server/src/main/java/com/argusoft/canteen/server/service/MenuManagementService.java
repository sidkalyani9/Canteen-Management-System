package com.argusoft.canteen.server.service;

import com.argusoft.canteen.server.model.MenuManagement;
import com.argusoft.canteen.server.repo.MenuManagementRepository;
import com.argusoft.canteen.server.exceptions.DishNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class MenuManagementService{

    private final MenuManagementRepository menuManagementRepository;

    @Autowired
    public MenuManagementService(MenuManagementRepository menuManagementRepository){
        this.menuManagementRepository = menuManagementRepository;
    }

    public MenuManagement addItem(MenuManagement menuManagement){
        menuManagement.setItemCode(UUID.randomUUID().toString());
        return menuManagementRepository.save(menuManagement);
    }

    public List<MenuManagement> findAllItems(){
        return menuManagementRepository.findAll();
    }

    public MenuManagement updateItem(MenuManagement menuManagement){
        return menuManagementRepository.save(menuManagement);
    }

    public  MenuManagement findItemById(Long id){
        return menuManagementRepository.findItemById(id).orElseThrow(() -> new DishNotFoundException("Dish id" +id+ "was not found"));
    }

    public void deleteItem(Long id){
        menuManagementRepository.deleteItemById(id);
    }


}