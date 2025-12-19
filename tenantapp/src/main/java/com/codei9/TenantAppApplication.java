package com.codei9;

import com.codei9.modules.commerce.model.Product;
import com.codei9.modules.commerce.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TenantAppApplication {
    public static void main(String[] args) {
        SpringApplication.run(TenantAppApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(ProductRepository repository) {
        return args -> {
            repository.deleteAll();
            // Store A Products
            repository.save(new Product(null, "iPhone 15 Pro Max", 1299.99, "Electronics", "tenant-a"));
            repository.save(new Product(null, "MacBook Air M3", 1099.00, "Electronics", "tenant-a"));
            
            // Store B Products
            repository.save(new Product(null, "Tesla Model S Plaid", 89000.00, "Automotive", "tenant-b"));
            repository.save(new Product(null, "Nike Air Jordan 1", 170.00, "Fashion", "tenant-b"));
            
            System.out.println("--- CODEI9 MULTI-TENANT DATA LOADED ---");
        };
    }
}
