package com.example.task7.controller;

import com.example.task7.model.Customer;
import com.example.task7.model.TypeCustomer;
import com.example.task7.service.ITypeCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/typeCustomer")
public class RestTypeCustomerController {
    @Autowired
    private ITypeCustomerService typeCustomerService;
    @GetMapping("")
    public ResponseEntity<List<TypeCustomer>> getAll(){
        List<TypeCustomer> typeCustomers = typeCustomerService.getAll();
        if(typeCustomers.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(typeCustomers,HttpStatus.OK);
        }
    }

}
