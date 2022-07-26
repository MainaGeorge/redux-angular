import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './store/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  saveBook(book: Book) {
    return this.http.post<Book>('http://localhost:3000/books', book);
  }
}
