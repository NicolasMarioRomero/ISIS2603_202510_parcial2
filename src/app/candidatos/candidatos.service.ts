import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Candidato } from './candidatos-list/candidato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {
  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getCandidatos(): Observable<any>{
  return this.http.get<any>(this.apiUrl)
}

}
