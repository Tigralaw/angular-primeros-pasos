import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
    id: '',
    name: '',
    power: 0
  }
]

@Output()
public onDelete: EventEmitter<string> = new EventEmitter();

onDeleteCharacter( id: string ):void {
  // Emite el ID del personaje
  this.onDelete.emit( id );
}

}
