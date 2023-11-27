import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  public listHeroes: string[] = ['Spiderman','Hawkeye','Ironman','Hulk','Loki'];
  public deletedHero?: string = '';

  deleteHero(){
    this.deletedHero = this.listHeroes.pop();
  }
}
