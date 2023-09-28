import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

// @Injectable: es un decorador que le indica a angular que se trata de un servicio

@Injectable({providedIn: 'root'})
export class DBZService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  addCharacter( character: Character ): void {

    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    // Asigna un nuevo caracter con la info que recibe de los parametros que se ingresan en
    // los input y lo guarda en newCharacter
    // crea un objeto de tipo Character e inicializa los valores, genera el id con uuid() y lo combina
    // con character para formar un mismo objeto
    const newCharacter: Character = { ...character };
    // Agrega un elemento al arreglo tipo Character con la información de newCharacter
    this.characters.push(newCharacter);
  }

  // Elimina un elemento del objeto character haciendo un filtrado de los demás elementos y
  // excluyendo al que tiene el id que recibe el método
  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id )
  }

  // onDeleteCharacter( index: number ):void {
  //   this.characters.splice(index, 1);
  // }

}
