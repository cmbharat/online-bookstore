package com.bharat.online_bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bharat.online_bookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
