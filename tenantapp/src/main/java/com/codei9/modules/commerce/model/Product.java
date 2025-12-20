package com.codei9.modules.commerce.model;

import jakarta.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Double price;
    private String imageUrl;
    private String tenantId;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    public Product() {}

    // ORDER: Name (String), Price (Double), Image (String), Tenant (String), Category (Obj)
    public Product(String name, Double price, String imageUrl, String tenantId, Category category) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.tenantId = tenantId;
        this.category = category;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public Double getPrice() { return price; }
    public String getImageUrl() { return imageUrl; }
    public String getTenantId() { return tenantId; }
    public Category getCategory() { return category; }
}
