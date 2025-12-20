package com.codei9.modules.commerce.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Category {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Integer level;

    @ManyToOne @JoinColumn(name = "parent_id")
    @JsonIgnoreProperties("subCategories")
    private Category parent;

    @OneToMany(mappedBy = "parent")
    private List<Category> subCategories;

    public Category() {}
    public Category(String name, Integer level, Category parent) {
        this.name = name;
        this.level = level;
        this.parent = parent;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public Integer getLevel() { return level; }
    public Category getParent() { return parent; }
    public List<Category> getSubCategories() { return subCategories; }
}
