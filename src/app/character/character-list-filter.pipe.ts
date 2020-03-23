import { Pipe, PipeTransform } from '@angular/core';
import { Character } from './character';

@Pipe({ name: 'characterListFilter' })
export class CharacterListFilterPipe implements PipeTransform {
  transform(characters: Array<Character>, filterString: string): Array<Character> {
    let reg = new RegExp(filterString, 'i');
    return characters.filter(c => c.name.match(reg));
  }
}
