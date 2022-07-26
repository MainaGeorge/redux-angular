import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { BooksService } from '../books.service';
import {
  bookAPIonSuccess,
  invokeBooksAPI,
  invokeSaveBookAPI,
  saveBookAPIonSuccess,
} from './book.actions';

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions, private bookService: BooksService) {}

  loadAllBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeBooksAPI),
      switchMap(() =>
        this.bookService
          .getBooks()
          .pipe(map((books) => bookAPIonSuccess({ allBooks: books })))
      )
    )
  );

  saveBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeSaveBookAPI),
      switchMap((action) =>
        this.bookService
          .saveBook(action.book)
          .pipe(map((book) => saveBookAPIonSuccess({ savedBook: book })))
      )
    )
  );
}
