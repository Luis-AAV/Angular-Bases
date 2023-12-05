import { EventEmitter, Injectable, Output } from '@angular/core';
import { character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  },{
    id: uuid(),
    name: 'Goku',
    power: 9999
  }]

  onNewCharacter(character:character):void {

    const newCharacter: character = {  id:uuid(), ... character }

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number):void{
  //   this.characters.splice(index,1);
  // }

  onDeleteById(id:string):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
