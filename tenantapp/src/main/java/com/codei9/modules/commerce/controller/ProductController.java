package com.codei9.modules.commerce.controller;

import com.codei9.modules.commerce.model.Product;
import com.codei9.modules.commerce.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/commerce")
@CrossOrigin(origins = "*") // This allows the frontend to see the data
public class ProductController {
    private final ProductRepository repository;

    public ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/products")
    public List<Product> getProducts(@RequestHeader(value = "X-TenantID", defaultValue = "tenant-a") String tenantId) {
        return repository.findByTenantId(tenantId);
    }
}
