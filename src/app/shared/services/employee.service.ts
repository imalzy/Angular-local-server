import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmployee, IEmployeeResponse } from '../model/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  getEmp(): Observable<IEmployeeResponse<IEmployee[]>> {
    return this.httpClient.get(`${this.apiUrl}/employees`);
  }
}
