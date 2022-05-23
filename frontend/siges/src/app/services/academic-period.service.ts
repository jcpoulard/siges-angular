import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {AcademicPeriod} from '../common/academic-period'; 
import {map} from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class AcademicPeriodService {

  baseUrl = 'http://localhost:8080/sigesapi/academicPeriods'; 

  constructor(private httpClient: HttpClient) { }

  getAcademicPeriodList(): Observable<AcademicPeriod[]>{

    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response=>response._embedded.academicPeriods)
    );

  }
}

interface GetResponse {
  
  _embedded: {
   academicPeriods: AcademicPeriod[];
  }
  
}