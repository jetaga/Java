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
        String activeTenant = TenantContext.getCurrentTenant();
        
        // If NO tenant is found in Context OR Header, return ALL products (Global Mode)
        if ((activeTenant == null || activeTenant.isEmpty()) && 
            (headerId == null || headerId.isEmpty())) {
            return repository.findAll();
        }
        
        // Otherwise, filter by the detected tenant
        String tenantToFilter = (activeTenant != null) ? activeTenant : headerId;
        return repository.findByTenantId(tenantToFilter);
    }
}
