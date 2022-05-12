import { Component, OnInit } from '@angular/core';
import { GaleriaService } from './galeria.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor(public dados: GaleriaService) { }

  ngOnInit() {

    this.dados.getDogs()

  }

}
