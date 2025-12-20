package com.codei9.modules.commerce.controller;

import com.codei9.modules.commerce.model.Product;
import com.codei9.modules.commerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getProducts(
            @RequestParam(required = false) Long categoryId,
            @RequestHeader(value = "X-TenantID", defaultValue = "tenant-a") String tenantId) {
        
        if (categoryId != null) {
            return productRepository.findByHierarchy(categoryId, tenantId);
        }
        return productRepository.findByTenantId(tenantId);
    }
}
