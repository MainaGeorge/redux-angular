import { createAction, props } from '@ngrx/store';
import { Book } from './book';

export const invokeBooksAPI = createAction(
  '[BooksAPI ] invoke books Fetch API'
);

export const bookAPIonSuccess = createAction(
  '[BooksAPI ] books fetched successfully from the server',
  props<{ allBooks: Book[] }>()
);

export const invokeSaveBookAPI = createAction(
  '[BookApi] invoke save book API',
  props<{ book: Book }>()
);

export const saveBookAPIonSuccess = createAction(
  '[BooksAPI ] books saved successfully to the server',
  props<{ savedBook: Book }>()
);
