
package com.example.dietetyk.Diet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DietService {
    @Autowired
    private DietRepository repository;
    public List<Diet> allDiets(){
        return repository.findAll();

    }
}
