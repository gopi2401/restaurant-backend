
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    phone VARCHAR(15) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,             
    customer_name VARCHAR(255),     
    quantity INT NOT NULL,               
    price DECIMAL(10, 2) NOT NULL,       
    status VARCHAR(50) DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW() 
);

CREATE TABLE order_items (
   id SERIAL PRIMARY KEY,
   order_id  bigint NOT NULL,
   menu_id  bigint NOT NULL,
   menu_name  varchar(255) NOT NULL,
   menu_price  int NOT NULL,
   menu_quantity  int NOT NULL,
  PRIMARY KEY (id,order_id,menu_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE menus (
    id SERIAL PRIMARY KEY,        
    name VARCHAR(255) NOT NULL,   
    price DECIMAL(10, 2) NOT NULL,
    pic_url VARCHAR(2083)
);
BsXOrQRYct7oKCTIJSCp

