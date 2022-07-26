import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../store/book';
import { invokeSaveBookAPI } from '../store/book.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  formBook: Book = {
    price: 0,
    title: '',
    author: '',
    id: 0,
  };
  constructor(private store: Store) {}

  ngOnInit(): void {}

  save() {
    this.store.dispatch(invokeSaveBookAPI({ book: this.formBook }));
  }
}
