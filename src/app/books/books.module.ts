import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/book.reducers';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book.effects';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, AddComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('mybooks', bookReducer),
    EffectsModule.forFeature([BookEffects]),
    FormsModule,
  ],
})
export class BooksModule {}
