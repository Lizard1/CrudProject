import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lib } from 'src/app/entity/library/lib';

@Injectable({
    providedIn: 'root'
})
export class LibraryService {
    constructor(private http: HttpClient) { }
    
    private baseUrl: string = 'http://localhost:8080/library';

    createUpdateLib(lib: Lib): Observable<Lib> {
        return this.http.post<Lib>(`${this.baseUrl}/createup`, lib);
    }

    getAllLibs(): Observable<Lib[]> {        
        return this.http.get<Lib[]>(`${this.baseUrl}/all`);
    }

    getLibById(id: number): Observable<Lib> {
        return this.http.get<Lib>(`${this.baseUrl}/${id}`);
    }

    deleteLibById(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
    }

    deleteAllLibs(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/delete/all`, { responseType: 'text' });
    }
}
