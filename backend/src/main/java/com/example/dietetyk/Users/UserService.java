package com.example.dietetyk.Users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;
    public List<Users> allUsers(){
        return repository.findAll();

    }
}
