import { Component, OnInit } from '@angular/core';
import { SomarService } from '../../services';

@Component({
  selector: 'app-somar',
  templateUrl: './somar.component.html',
  styleUrls: ['./somar.component.css']
})
export class SomarComponent implements OnInit {

  constructor(private somar: SomarService) { }
  private valor:number;
  private qtLanches:number;
  private qtBebidas:number;
  private qtDoces:number;

  ngOnInit() {
    this.valor = 0;
    this.qtLanches = 0;
    this.qtBebidas = 0;
    this.qtDoces = 0;
  }

  calcula(valorRecebido:number){
    this.valor = this.somar.somar(this.valor, valorRecebido);
  }

  addLanche(){
    this.qtLanches = this.qtLanches + 1;
  }

  addBebida(){
    this.qtBebidas = this.qtBebidas + 1;
  }

  addDoce(){
    this.qtDoces = this.qtDoces + 1;
  }

  get pegaValor(){
    return this.valor;
  }

  get pegaQtLanches(){
    return this.qtLanches;
  }

  get pegaQtBebidas(){
    return this.qtBebidas;
  }

  get pegaQtDoces(){
    return this.qtDoces;
  }

}
