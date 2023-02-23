package edu.example.demospring.persitence;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "students")
public class Product implements Serializable {
    private long id;
    private String name;

    public Product() {
    }

    public Product(String name) {
        this.name = name;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
