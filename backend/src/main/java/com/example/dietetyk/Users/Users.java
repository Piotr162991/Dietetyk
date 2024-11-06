package com.example.dietetyk.Users;


import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import com.example.dietetyk.Dieta;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Users {
    
@Id
    private ObjectId id;
    private String username;
    private String email;
    private String password_hash;
    private int age;
    private String gender;
    private int height_cm;
    private int weight_kg;
    private String activity_level;
    private String goal;
    @DocumentReference
    private List<Dieta> dietaIds;
}
