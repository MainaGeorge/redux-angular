import { createReducer, on } from '@ngrx/store';
import { Book } from './book';
import { bookAPIonSuccess, saveBookAPIonSuccess } from './book.actions';

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(bookAPIonSuccess, (state, payload) => payload.allBooks),
  on(saveBookAPIonSuccess, (state, payload) => [payload.savedBook, ...state])
);
