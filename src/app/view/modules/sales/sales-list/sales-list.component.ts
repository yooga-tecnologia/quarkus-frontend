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

  constructor(private salesService: SalesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    console.log("Iniciou ?")
    await this.loadQuarkusList();
  }

  async loadQuarkusList() {
    this.vendas = await this.salesService.findVendasPendentes();
    console.log(this.vendas);
  }
}
