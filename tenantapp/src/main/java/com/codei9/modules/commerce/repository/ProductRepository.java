package com.codei9.modules.commerce.repository;

import com.codei9.modules.commerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query(value = "WITH RECURSIVE category_tree AS (" +
           "SELECT id FROM category WHERE id = :catId " +
           "UNION ALL " +
           "SELECT c.id FROM category c INNER JOIN category_tree ct ON c.parent_id = ct.id" +
           ") SELECT p.* FROM product p WHERE p.category_id IN (SELECT id FROM category_tree) AND p.tenant_id = :tenantId", 
           nativeQuery = true)
    List<Product> findByHierarchy(@Param("catId") Long catId, @Param("tenantId") String tenantId);

    List<Product> findByTenantId(String tenantId);
}
