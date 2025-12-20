package com.codei9.modules.commerce.controller;

import com.codei9.modules.commerce.model.Category;
import com.codei9.modules.commerce.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/categories")
@CrossOrigin(origins = "*")
public class CategoryController {
    @Autowired private CategoryRepository categoryRepository;

    @GetMapping
    public List<Category> getRootCategories() {
        return categoryRepository.findAll().stream()
                .filter(c -> c.getLevel() == 1)
                .collect(Collectors.toList());
    }

    @GetMapping("/tree")
    public List<Category> getCategoryTree() {
        return categoryRepository.findAll().stream()
                .filter(c -> c.getLevel() == 1)
                .collect(Collectors.toList());
    }
}
