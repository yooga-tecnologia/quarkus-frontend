import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuarioENV: string;
  senhaENV: string;
  usuario: any;
  senha: any;

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
    this.usuarioENV = environment.usuario;
    this.senhaENV = environment.senha;
  }

  ngOnInit(): void {}

  async entrar() {
    if (this.usuario === this.usuarioENV && this.senha === this.senhaENV) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sucesso ao realizar login',
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigate(['page']);
    } else {
      Swal.fire({
        title: 'Opss..',
        text: "Usuário ou senha inválido",
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok',
      })
    }
  }
}
