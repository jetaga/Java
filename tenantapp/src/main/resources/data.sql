-- Drop old tables to prevent schema mismatch
DROP TABLE IF EXISTS commerce_products;

-- Create table manually to ensure column names match exactly
CREATE TABLE commerce_products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    price DOUBLE,
    tenant_id VARCHAR(255),
    service_type VARCHAR(255)
);

INSERT INTO commerce_products (name, price, tenant_id, service_type) VALUES ('iPhone 15', 999.00, 'tenant-a', 'E-COMMERCE');
INSERT INTO commerce_products (name, price, tenant_id, service_type) VALUES ('Vintage Camera', 150.00, 'tenant-a', 'CLASSIFIED');
INSERT INTO commerce_products (name, price, tenant_id, service_type) VALUES ('Used Sofa', 300.00, 'tenant-b', 'CLASSIFIED');
