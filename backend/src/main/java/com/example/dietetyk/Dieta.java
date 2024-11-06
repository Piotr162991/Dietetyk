package com.example.dietetyk;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "diets")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Dieta {
    @Id
    private ObjectId id;
    private String name;
    private String description;
    private String created_at;
    private int target_calories;
    private int protein_percentage;
    private int carb_percentage;
    private int fat_percentage;
}
