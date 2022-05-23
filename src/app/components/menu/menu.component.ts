import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  disabled={display : "none"}
  change ={display : 'block'}
  style = this.disabled;
  escolha: any;
  constructor() { }

  ngOnInit() {

  }
  methodEscolha(_event: any,escolha: string){
    this.escolha = escolha
  }

}
