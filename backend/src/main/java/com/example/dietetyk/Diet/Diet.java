package com.example.dietetyk.Diet;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "diet")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Diet {
    @Id
    private ObjectId id;
    private String name;
    private String description;
    private String created_at;
    private int target_calories;
    private int protein_percentage;
    private int carb_percentage;
    private int fat_percentage;

    public Diet(String name, String description, String created_at, int target_calories, int protein_percentage, int carb_percentage, int fat_percentage){
        this.name=name;
        this.description=description;
        this.created_at=created_at;
        this.target_calories=target_calories;
        this.protein_percentage=protein_percentage;
        this.carb_percentage=carb_percentage;
        this.fat_percentage=fat_percentage;
    }
}
