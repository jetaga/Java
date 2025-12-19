package com.codei9.ecommerce;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class EcommerceApiTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void shouldFetchProductsWithTenantHeader() throws Exception {
        mockMvc.perform(get("/api/products")
                .header("X-Tenant-ID", "tenant-001")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Test Product"));
    }

    @Test
    public void shouldFetchCategoriesWithTenantHeader() throws Exception {
        mockMvc.perform(get("/api/categories")
                .header("X-Tenant-ID", "tenant-001")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Test Category"));
    }
}
