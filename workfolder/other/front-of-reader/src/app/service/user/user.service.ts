import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/entity/user/user';

@Injectable( {
    providedIn: 'root'
} )
export class UserService {
    constructor( private http: HttpClient ) { }

    private baseUrl: string = 'http://localhost:8080/user';

    private loginUrl: string = 'http://localhost:8080/login';

    loginpageenter(): Observable<any> {
        return this.http.get(`${this.loginUrl}`, { responseType: 'text' });
    }

    createUpdateUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/createup`, user);
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}/all`);
    }

    getUserById(id: number): Observable<User> {
        return this.http.get<User>(`${this.baseUrl}/${id}`);
    }

    deleteUserById(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
    }

    deleteAllUsers(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/delete/all`, { responseType: 'text' });
    }
}
