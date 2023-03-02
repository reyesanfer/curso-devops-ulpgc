package com.inerza.ulpgc.bookReview.core.persistence;

import com.inerza.ulpgc.bookReview.core.repositories.BookRepository;
import com.inerza.ulpgc.bookReview.model.entities.Book;
import com.inerza.ulpgc.bookReview.model.entities.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class BookService implements IBookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<Book> getBookList(int page, int size, String sortDir, String sort) {

        PageRequest pageReq = PageRequest.of(page, size, Sort.Direction.fromString(sortDir), sort);

        Page<Book> books = bookRepository.findAll(pageReq);
        return books.getContent();
    }

    @Override
    public void updateBook(Book book) {
        bookRepository.save(book);
    }

    @Override
    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Book getBookById(Long id) {
        return bookRepository.getReferenceById(id);
    }

    @Override
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }

}
