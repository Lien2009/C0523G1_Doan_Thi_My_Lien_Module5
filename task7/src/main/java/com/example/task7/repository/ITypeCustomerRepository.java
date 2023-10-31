package com.example.task7.repository;

import com.example.task7.model.TypeCustomer;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ITypeCustomerRepository extends JpaRepository<TypeCustomer, Integer> {
}
