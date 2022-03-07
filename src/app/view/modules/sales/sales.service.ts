import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  baseUrl= "http://localhost:8082"

  constructor(
      private http: HttpClient,
      private router: Router
  ) {
  }

  public async findVendasPendentes(): Promise<any>{
      console.log("Chamou ?")
      return this.http.get<any>(`${this.baseUrl}/venda/pedentes`).toPromise()
  }
}
