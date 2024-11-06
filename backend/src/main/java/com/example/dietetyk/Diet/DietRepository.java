package com.example.dietetyk.Diet;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DietRepository extends MongoRepository<Diet, ObjectId>{


}
