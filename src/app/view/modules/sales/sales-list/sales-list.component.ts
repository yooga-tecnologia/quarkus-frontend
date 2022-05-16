import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { filter } from 'rxjs';
import { Venda } from 'src/app/model/Venda';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss'],
})
export class SalesListComponent implements OnInit {
  vendas: Venda[];
  key: string = 'nome';
  reverse: boolean = false;
  isClicked: boolean = false;
  transmitidas = 0;

  constructor(
    private salesService: SalesService,
    public router: Router,
    private http: HttpClient,
    private clipboardApi: ClipboardService,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    await this.loadQuarkusList();
  }

  async loadQuarkusList() {
    this.vendas = await this.salesService.findVendasPendentes();
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  async copyText(codigo: any) {
    this.clipboardApi.copyFromContent(codigo);
    this.salesService.showMessageCopy(`Código ${codigo} copiado`);
  }

  async reenviar(codigo: number) {
    this.isClicked = true;

      this.salesService.reenviarNotasPendentes(codigo).then((response) => {

        if(response.status === 500) {
          return this.salesService.showMessageError(response.message);
        }

        if (response.notaEvento.cStat === 150 || response.notaEvento.cStat === 100) {
          this.salesService.showMessage(`${response.notaEvento.cStat} - ${response.notaEvento.xMotivo} código: ${codigo} `);

          this.vendas.forEach((element, index) => {
            if (element.codigo === codigo) {
              this.vendas.splice(index, 1);
              this.transmitidas++;
            }
          });

        } else {
          this.salesService.showMessageError(`${response.notaEvento.cStat} - ${response.notaEvento.xMotivo} código: ${codigo} `);
        }
      }).catch(error => {
        return this.salesService.showMessageError(error.error.message);
      })
  }
}
