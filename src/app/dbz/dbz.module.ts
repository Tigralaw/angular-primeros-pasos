import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page-component';
import { ListComponent } from './components/list/list.component';
import { AddCharactersComponent } from './components/add-characters/add-characters.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharactersComponent,
  ],
  exports: [
    MainPageComponent,
    AddCharactersComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DbzModule { }
