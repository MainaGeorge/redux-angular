import { createAction, props } from '@ngrx/store';
import { Book } from './book';

export const invokeBooksAPI = createAction(
  '[BooksAPI ] invoke books Fetch API'
);

export const bookAPIonSuccess = createAction(
  '[BooksAPI ] books fetched successfully from the server',
  props<{ allBooks: Book[] }>()
);
