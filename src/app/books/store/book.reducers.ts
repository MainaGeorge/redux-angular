import { createReducer } from '@ngrx/store';
import { Book } from './book';

export const initialState: ReadonlyArray<Book> = [
  {
    id: 1,
    title: 'Master .NET',
    author: 'Dude Fella',
    price: 20,
  },
  {
    id: 1,
    title: 'Master Angular',
    author: 'Baby Boss',
    price: 20,
  },
];

export const bookReducer = createReducer(initialState);
