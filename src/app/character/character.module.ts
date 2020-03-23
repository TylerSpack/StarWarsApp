import { NgModule } from '@angular/core';

import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { AppCharacterListComponent } from './app-character-list/app-character-list.component';
import { CharacterListFilterPipe } from './character-list-filter.pipe';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-router.module';


@NgModule({
  declarations: [
    CharacterDetailComponent,
    AppCharacterListComponent,
    CharacterListFilterPipe
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ]
})
export class CharacterModule { }
