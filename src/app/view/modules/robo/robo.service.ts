import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoboService {
  private api_quarkus_fiscal: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar) {
      this.api_quarkus_fiscal = environment.api_quarkus_fiscal
    }


    public async listAllRoboClients(): Promise<any>{
      return this.http.get<any>(`${this.api_quarkus_fiscal}fiscal/robo/clientes`).toPromise();
  }

  public showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 100000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['info-snackbar']
  })}

  public showMessageCopy(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['sucesso-snackbar']
  })}
}
