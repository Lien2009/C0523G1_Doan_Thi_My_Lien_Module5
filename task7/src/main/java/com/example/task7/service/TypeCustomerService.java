package com.example.task7.service;

import com.example.task7.model.TypeCustomer;
import com.example.task7.repository.ITypeCustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeCustomerService implements ITypeCustomerService{
    @Autowired
    private ITypeCustomerRepository typeCustomerRepository;
    @Override
    public List<TypeCustomer> getAll() {
        return typeCustomerRepository.findAll();
    }
}
