package com.codei9.modules.commerce.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "commerce_products")
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double price;
    private String tenantId;
    private String serviceType; 
}
