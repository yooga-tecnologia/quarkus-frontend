import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private api_quarkus_fiscal: string;
  private apiRobo: string;

  constructor(
      private http: HttpClient,
      private router: Router,
      private snackBar: MatSnackBar

  ) {
    this.api_quarkus_fiscal = environment.api_prod_fiscal;
    this.apiRobo = environment.api_robo_fiscal;
  }

  public async findVendasPendentes(): Promise<any>{
      return this.http.get<any>(`${this.api_quarkus_fiscal}venda/pedentes`).toPromise();
  }

  public async reenviarNotasPendentes(codigo: number): Promise<any>{
    return this.http.get<any>(`${this.apiRobo}${codigo}`).toPromise();
  }

  public showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 100000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['sucesso-snackbar']
  })}

  public showMessageCopy(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['sucesso-snackbar']
  })}

  public showMessageError(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['error-snackbar']
  })}



}
