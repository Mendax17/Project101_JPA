package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"main.*"})
@EntityScan("main.bean")
@EnableJpaRepositories("main.dao")
public class Project101JpaApplication {

	public static void main(String[] args) {
		SpringApplication.run(Project101JpaApplication.class, args);
	}

}