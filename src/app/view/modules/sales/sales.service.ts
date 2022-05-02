import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private api_quarkus_fiscal: string;

  constructor(
      private http: HttpClient,
      private router: Router
  ) {
    this.api_quarkus_fiscal = environment.api_fiscal;
  }

  public async findVendasPendentes(): Promise<any>{
      return this.http.get<any>(`${this.api_quarkus_fiscal}venda/pedentes`).toPromise();
  }



}
