package com.codei9.modules.commerce.repository;

import com.codei9.modules.commerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByTenantId(String tenantId);
    // Spring needs the exact path: Category -> Id
    List<Product> findByCategoryIdAndTenantId(Long categoryId, String tenantId);
}
