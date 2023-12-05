import { Component, EventEmitter, Input, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})

export class ListComponent {

  public colorTexto: string = "text-primary";

  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: character[] = [{
    name: 'Trunks',
    power: 10
  }];

  onDeleteCharacter(id:string | undefined):void {
    if(!id) return;
    console.log(id);
    this.onDelete.emit(id);
  }

}
