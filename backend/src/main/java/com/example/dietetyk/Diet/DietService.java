
package com.example.dietetyk.Diet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;


import com.example.dietetyk.Users.Users;

import java.util.List;

@Service
public class DietService {
    @Autowired
    private DietRepository repository;
    public List<Diet> allDiets(){
        return repository.findAll();

    }
    private MongoTemplate mongoTemplate;
    public Diet createDiet(String name, String description, String created_at, int target_calories, int protein_percentage, int carb_percentage, int fat_percentage, String username){
        Diet diet = repository.insert(new Diet(name, description, created_at, target_calories, protein_percentage, carb_percentage, fat_percentage));
        
        mongoTemplate.update(Users.class)
            .matching(Criteria.where("username").is(username))
                .apply(new Update().push("dietUsername").value(diet.getId()))
                .first();
                return diet;
    }
    
   

}
