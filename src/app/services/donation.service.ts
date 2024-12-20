import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Donation } from "../types/donation.model";
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
  })
  export class DonationService {

    http = inject(HttpClient)
    urlBase = `${environment.urlServer}/donations`;

    getDonation(): Observable<Donation[]> {
      return this.http.get<Donation[]>(this.urlBase);
    }

    getDonationById(id: string | null): Observable<Donation> {
      return this.http.get<Donation>(`${this.urlBase}/${id}`)
    }

    postDonation(donation: Donation): Observable<Donation> {
      const donationWithStringAmount = {
        ...donation,
        amount: donation.amount.toString(),
      };

      return this.http.post<Donation>(this.urlBase, donationWithStringAmount);
    }

    deleteDonation(id: string | undefined): Observable<Donation> {
      return this.http.delete<Donation>(`${this.urlBase}/${id}`)
    }

    updateDonation(id: string | null, donation: Donation): Observable<Donation> {
      return this.http.put<Donation>(`${this.urlBase}/${id}`, donation);
    }

    getDonationsByEntrepreneurshipId(entrepreneurshipId: number): Observable<Donation[]> {
      return this.http.get<Donation[]>(`${this.urlBase}?entrepreneurshipId=${entrepreneurshipId}`);
    }

     // Obtener las donaciones del usuario por ID
  getDonationsByUserId(userId: string): Observable<Donation[]> {
    return this.http.get<Donation[]>(`${this.urlBase}?idUser=${userId}`);
  }

  }
