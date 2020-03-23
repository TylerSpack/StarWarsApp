import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './app-character-list.component.html',
  styleUrls: ['./app-character-list.component.css']
})
export class AppCharacterListComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  
  showCharacters = true;
  showDetails = true;
  filterBy: string;
  characterList: Array<Character>;

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(characters => this.characterList = characters.results);
  }

  
  toggleDetails() {
    this.showDetails = this.showDetails ? false : true;
  }
  toggleShowCharacters() {
    this.showCharacters = this.showCharacters ? false : true;
  }
  changeForce(index: number, force: number){
    this.characterList[index].force = force;
  }
}
