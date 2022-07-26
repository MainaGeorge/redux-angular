import { createReducer, on } from '@ngrx/store';
import { Book } from './book';
import { bookAPIonSuccess } from './book.actions';

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(bookAPIonSuccess, (_, payload) => payload.allBooks)
);
