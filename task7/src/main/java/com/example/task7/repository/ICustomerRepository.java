package com.example.task7.repository;

import com.example.task7.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
//    @Query(value = "select customer.id,customer.name,customer.gender,customer.address,customer.date_of_birth,customer.email,customer.identity,customer.phone,customer.type_id from customer join type_customer on customer.type_id = type_customer.id where customer.name like :name OR type_customer.name like :typeCustomer", nativeQuery = true)
//    Page<Customer> findAllCustomer(Pageable pageable, String name, String typeCustomer);
    @Query(value = "select customer.* from customer join type_customer on customer.type_id = type_customer.id where customer.name like :name AND type_customer.name like :typeCustomer", nativeQuery = true)
    List<Customer> findAllCustomer(String name, String typeCustomer);
}
