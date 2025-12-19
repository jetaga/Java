package com.codei9.modules.commerce.controller;

import com.codei9.modules.commerce.model.Product;
import com.codei9.modules.commerce.service.ProductService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/commerce")
public class ProductController {
    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping("/products")
    public List<Product> getProducts(@RequestHeader("X-Tenant-ID") String tenantId) {
        return service.getTenantProducts(tenantId);
    }
}
