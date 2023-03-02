import { apiConection } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(protected http: HttpClient) { }

  newReview = new EventEmitter<Review>();
  deletedReview = new EventEmitter<number>();


  getReviews(page: number, size: number): Observable<Review[]> {
    let params = new HttpParams({

    });
    params = params.append('page', page);
    params = params.append('size', size);
    params = params.append('sortDir', 'desc');
    params = params.append('sort', 'id');

    return this.http.get<Review[]>(apiConection.url + '/reviews', { params });
  }

  createReview(review: Review) {
    return new Promise(resolve => {
      this.http.post(apiConection.url + '/reviews', review)
        .subscribe((response: Review) => {
          this.newReview.emit(response);
          resolve(true);
        });
    });
  }

  updateReview(review: Review) {
    return this.http.put(apiConection.url + '/reviews/' + review.id, review);
  }

  deleteReview(reviewId: number) {
    return new Promise(resolve => {
      return this.http.delete(apiConection.url + '/reviews/' + reviewId)
      .subscribe( (response) => {
        this.deletedReview.emit(reviewId);
        resolve(true);
      });
    });
  }
}
