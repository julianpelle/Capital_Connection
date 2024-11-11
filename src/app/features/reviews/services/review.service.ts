import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Review } from "../models/review.model";

@Injectable({
    providedIn: 'root'
  })
  export class ReviewService {
  
    http = inject(HttpClient)
    urlBase = 'http://localhost:8080/reviews';
  
    getReview(): Observable<Review[]> {
      return this.http.get<Review[]>(this.urlBase);
    }
  
    getReviewById(id: Number | null): Observable<Review[]> {
      return this.http.get<Review[]>(`${this.urlBase}/${id}`)
    }
  
    postReview(review: Review): Observable<Review> {
      return this.http.post<Review>(this.urlBase, review)
    }
  
    deleteReview(id: Number | undefined): Observable<boolean> {
      return this.http.delete<boolean>(`${this.urlBase}/${id}`).pipe(
        map(()=>true)
      )
    }
  
    updateReview(id: Number | null, review: Partial<Review>): Observable<Review> {
      return this.http.patch<Review>(`${this.urlBase}/${id}`, review);
    }

    
}

  