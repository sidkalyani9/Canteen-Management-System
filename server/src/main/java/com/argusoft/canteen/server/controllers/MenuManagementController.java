package com.argusoft.canteen.server.controllers;

import com.argusoft.canteen.server.exceptions.DishNotFoundException;
import com.argusoft.canteen.server.model.MenuManagement;
import com.argusoft.canteen.server.repo.MenuManagementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.argusoft.canteen.server.service.MenuManagementService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/menu")
public class MenuManagementController {

    @Autowired
    private MenuManagementRepository menuManagementRepository;

    private MenuManagementService menuManagementService;

    public MenuManagementController(MenuManagementService menuManagementService){
        this.menuManagementService=menuManagementService;
    }

    @GetMapping("/fetchAll")
    public ResponseEntity<List<MenuManagement>> getAllItems(){
        List<MenuManagement> items = menuManagementService.findAllItems();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<MenuManagement> getItemById(@PathVariable("id") UUID id){
        MenuManagement item = menuManagementService.findItemById(id);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<MenuManagement> addDish(@RequestBody MenuManagement menu){
        MenuManagement newDish = menuManagementService.addItem(menu);
        return new ResponseEntity<>(newDish, HttpStatus.CREATED);
    }

    @PutMapping("/dish/{id}")
    public ResponseEntity<MenuManagement> updateDish(@PathVariable UUID uuid, @RequestBody MenuManagement menu){
        MenuManagement menuManagement = menuManagementRepository.findById(uuid)
                .orElseThrow(() -> new DishNotFoundException("Dish not exist with id :" + uuid));

        menuManagement.setDish_name(menu.getDish_name());
        menuManagement.setPrice(menu.getPrice());
        menuManagement.setDescription(menu.getDescription());
        menuManagement.setCategory_name(menu.getCategory_name());
        menuManagement.setUpdated_at(menu.getUpdated_at());
        menuManagement.setImage_url(menu.getImage_url());


        MenuManagement updatedMenu = menuManagementRepository.save(menuManagement);
        return ResponseEntity.ok(updatedMenu);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<MenuManagement> deleteItem(@PathVariable("id") UUID id){
        menuManagementService.deleteItem(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}

//    private final MenuManagementService menuManagementService;
//
//    public MenuManagementController(MenuManagementService menuManagementService){
//        this.menuManagementService=menuManagementService;
//    }
//
//    @GetMapping
//    public ResponseEntity<List<MenuManagement>> getAllDishes(){
//        List<MenuManagement> dishes = menuManagementService.getAllDishes();
//        return new ResponseEntity<>(dishes, HttpStatus.OK);
//    }
//
//    @GetMapping("/find/{id}")
//    public ResponseEntity<MenuManagement> getDishById(@PathVariable("uuid") UUID uuid){
//        MenuManagement dish = menuManagementService.findDishById(uuid);
//        return new ResponseEntity<>(dish, HttpStatus.OK);
//    }
//

//
//    @PutMapping("/update")
//    public ResponseEntity<MenuManagement> updateDish(@RequestBody MenuManagement menu){
//        MenuManagement updateDish = menuManagementService.updateDish(menu);
//        return new ResponseEntity<>(updateDish, HttpStatus.OK);
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<MenuManagement> deleteDish(@PathVariable("uuid") UUID uuid){
//        menuManagementService.deleteDish(uuid);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
//
//
//}
