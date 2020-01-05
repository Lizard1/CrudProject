import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/app/entity/book/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl: string = 'http://localhost:8080/book';

  constructor(private http: HttpClient) { }
  
  createUpdateBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/createup`, book);
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/all`);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${id}`);
  }

  deleteBookById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  deleteAllBooks(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/all`, {responseType: 'text'});
  }
}