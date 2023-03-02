import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reviews',
    loadChildren: () => import('./pages/reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'reviews',
    pathMatch: 'full'
  },
  {
    path: 'review-edition',
    loadChildren: () => import('./pages/review-edition/review-edition.module').then( m => m.ReviewEditionPageModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./pages/books/books.module').then( m => m.BooksPageModule)
  },
  {
    path: 'book-edition',
    loadChildren: () => import('./pages/book-edition/book-edition.module').then( m => m.BookEditionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
