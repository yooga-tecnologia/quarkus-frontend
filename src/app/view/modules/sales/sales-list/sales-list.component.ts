import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Axios } from 'axios';
import { ClipboardService } from 'ngx-clipboard';
import { Venda } from 'src/app/model/Venda';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  vendas: Venda[];
  key: string = 'nome';
  reverse: boolean = false;
  isClicked: boolean = false;


  constructor(private salesService: SalesService,
    public router: Router,
    private http: HttpClient,
    private clipboardApi: ClipboardService,
    private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    await this.loadQuarkusList();
  }

  async loadQuarkusList() {
    this.vendas = await this.salesService.findVendasPendentes();
  }


  sort(key:any) {
      this.key = key;
      this.reverse = !this.reverse;
  }

  async copyText(codigo: any) {
    this.clipboardApi.copyFromContent(codigo)
    this.salesService.showMessageCopy(`Código ${codigo} copiado`);
  }


  async reenviar(codigo:number){
    this.isClicked = true;
    window.open(`https://api2.yooga.com.br/fiscalservice/reenviar/${codigo}`, '_blank')

    const nota =  this.salesService.reenviarNotasPendentes(codigo).then(response => {
      if(response.notaEvento.cStat === 102 || response.notaEvento.cStat === 100){
          this.salesService.showMessage(`${response.notaEvento.xMotivo} código:${codigo}`);
      }else {
        this.salesService.showMessageError(`${response.notaEvento.xMotivo} código:${codigo}`);
      }
    });


  }
}
