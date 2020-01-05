import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stat } from 'src/app/entity/statistic/stat';
import { retry, catchError } from 'rxjs/operators';


@Injectable( {
    providedIn: 'root'
} )
export class StatService {

    constructor( private http: HttpClient ) { }

    private baseUrl: string = 'http://localhost:8080/stat';

    createUpdateStat(stat: Stat): Observable<Stat> {
        return this.http.post<Stat>(`${this.baseUrl}/createup`, stat);
    }

    getAllStat(): Observable<Stat[]> {
        return this.http.get<Stat[]>(`${this.baseUrl}/all`);
    }

    getStatById(id: number): Observable<Stat[]> {
        return this.http.get<Stat[]>(`${this.baseUrl}/${id}`);
    }

    getNewStatById(id: number): Observable<Stat> {
        return this.http.get<Stat>(`${this.baseUrl}/${id}`);
        } 
    // getStatById(id: number): Observable<Object> {
    //     return this.http.get(`${this.baseUrl}/${id}`);
    //   }

    deleteStatById(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
    }

    deleteAllStats(): Observable<any> {
        return this.http.delete(`${this.baseUrl}/delete/all`, { responseType: 'text' });
    }


}
