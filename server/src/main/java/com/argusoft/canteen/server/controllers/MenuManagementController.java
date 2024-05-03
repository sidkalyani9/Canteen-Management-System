package com.argusoft.canteen.server.controllers;

import com.argusoft.canteen.server.exceptions.DishNotFoundException;
import com.argusoft.canteen.server.model.MenuManagement;
import com.argusoft.canteen.server.repo.MenuManagementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/all")
    public List<MenuManagement> getMenu(){
        return menuManagementRepository.findAll();
    }

    @PostMapping("/add")
    public MenuManagement addDish(@RequestBody MenuManagement menu){
        return menuManagementRepository.save(menu);
    }

    @PutMapping("/dish/{id}")
    public ResponseEntity<MenuManagement> updateDish(@PathVariable UUID uuid, @RequestBody MenuManagement menu){
        MenuManagement menuManagement = menuManagementRepository.findById(uuid)
                .orElseThrow(() -> new DishNotFoundException("Dish not exist with id :" + uuid));

        menuManagement.setDish_name(menu.getDish_name());
        menuManagement.setPrice(menu.getPrice());
        menuManagement.setDescription(menu.getDescription());
        menuManagement.setRating(menu.getRating());
        menuManagement.setCategory_name(menu.getCategory_name());
        menuManagement.setUpdated_at(menu.getUpdated_at());
        menuManagement.setCreated_at(menu.getCreated_at());
        menuManagement.setImage_url(menu.getImage_url());


        MenuManagement updatedMenu = menuManagementRepository.save(menuManagement);
        return ResponseEntity.ok(updatedMenu);
    }

    @DeleteMapping("/dish/{uuid}")
    public ResponseEntity<Map<String, Boolean>> deleteDish(@PathVariable UUID uuid){
        MenuManagement dish = menuManagementRepository.findById(uuid)
                .orElseThrow(() -> new DishNotFoundException("Dish not exist with id :" + uuid));

        menuManagementRepository.delete(dish);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
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
//    @PostMapping("/add")
//    public ResponseEntity<MenuManagement> addDish(@RequestBody MenuManagement menu){
//        MenuManagement newDish = menuManagementService.addDish(menu);
//        return new ResponseEntity<>(newDish, HttpStatus.CREATED);
//    }
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
