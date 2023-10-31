package com.example.task7.service;

import com.example.task7.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICustomerService {
    List<Customer> getAll( String name, String typeCustomer);
    Customer findById(int id);
    void add(Customer customer);
    void update(int id,Customer customer);
    void delete(int id);
}
