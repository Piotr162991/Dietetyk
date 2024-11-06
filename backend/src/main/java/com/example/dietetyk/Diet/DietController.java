package com.example.dietetyk.Diet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/v1/diet")
public class DietController {
    @Autowired
    private DietService dietService;
    @Autowired
    private DietRepository dietRepository;
    @GetMapping
    public ResponseEntity<List<Diet>>getAllUsers(){
            return new ResponseEntity<List<Diet>>(dietService.allDiets(), HttpStatus.OK);
        }
        @PostMapping()
        public void createDiet(@RequestBody Diet diet){
            dietRepository.save(diet);
        }

    
}
