import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private salesService: SalesService,
    public router: Router,
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

  async reenviar(codigo:number){
    return window.open(`https://api2.yooga.com.br/fiscalservice/reenviar/${codigo}`, '_blank')
  }
}
