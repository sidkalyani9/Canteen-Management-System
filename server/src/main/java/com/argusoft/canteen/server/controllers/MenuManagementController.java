package com.argusoft.canteen.server.controllers;

import com.argusoft.canteen.server.model.MenuManagement;
import com.argusoft.canteen.server.service.MenuManagementService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuManagementController {

    private final MenuManagementService menuManagementService;

    public MenuManagementController(MenuManagementService menuManagementService){
        this.menuManagementService=menuManagementService;
    }

    @GetMapping
    public ResponseEntity<List<MenuManagement>> getAllItems(){
        List<MenuManagement> items = menuManagementService.findAllItems();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<MenuManagement> getItemById(@PathVariable("id") Long id){
        MenuManagement item = menuManagementService.findItemById(id);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<MenuManagement> addItem(@RequestBody MenuManagement menu){
        MenuManagement newItem = menuManagementService.addItem(menu);
        return new ResponseEntity<>(newItem, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<MenuManagement> updateItem(@RequestBody MenuManagement menu){
        MenuManagement updateItem = menuManagementService.updateItem(menu);
        return new ResponseEntity<>(updateItem, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<MenuManagement> deleteItem(@PathVariable("id") Long id){
        menuManagementService.deleteItem(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
