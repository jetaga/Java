package com.codei9.modules.commerce.service;

import com.codei9.modules.commerce.model.Product;
import com.codei9.modules.commerce.repository.ProductRepository;
import com.codei9.core.tenancy.TenantContext;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getTenantProducts(String headerId) {
        // We use the ID from the context to ensure security
        String activeTenant = TenantContext.getCurrentTenant();
        return repository.findByTenantId(activeTenant != null ? activeTenant : headerId);
    }
}
