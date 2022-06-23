import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Indicator } from '../interfaces/indicator';
import { CPI, Dollar, Euro, UF, UTM } from '../interfaces/types-indicator';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {

  private apiUrl: string;
  private apiKey: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiURL;
    this.apiKey = environment.apiKey;
  }

  private getDetailDollar(dateQuery: string): Observable<Array<Indicator>> {

    return this.http.get<Dollar>(`${this.apiUrl}/dolar/${dateQuery}?apikey=${this.apiKey}&formato=json`)
      .pipe(
        map((response: Dollar) => response.Dolares)
      );
  }

  private getDetailEuro(dateQuery: string): Observable<Array<Indicator>> {

    return this.http.get<Euro>(`${this.apiUrl}/euro/${dateQuery}?apikey=${this.apiKey}&formato=json`)
      .pipe(
        map((response: Euro) => response.Euros)
      );
  }

  private getDetailCPI(dateQuery: string): Observable<Array<Indicator>> {

    return this.http.get<CPI>(`${this.apiUrl}/ipc/${dateQuery}?apikey=${this.apiKey}&formato=json`)
      .pipe(
        map((response: CPI) => response.IPCs)
      );
  }

  private getDetailUF(dateQuery: string): Observable<Array<Indicator>> {

    return this.http.get<UF>(`${this.apiUrl}/uf/${dateQuery}?apikey=${this.apiKey}&formato=json`)
      .pipe(
        map((response: UF) => response.UFs)
      );
  }

  private getDetailUTM(dateQuery: string): Observable<Array<Indicator>> {

    return this.http.get<UTM>(`${this.apiUrl}/utm/${dateQuery}?apikey=${this.apiKey}&formato=json`)
      .pipe(
        map((response: UTM) => response.UTMs)
      );
  }

  public getDetailIndicators(indicator: string, date: string): Observable<Array<Indicator>> {

    if (indicator === 'Dollar') {

      return this.getDetailDollar(date);

    } else if (indicator === 'Euro') {

      return this.getDetailEuro(date);

    } else if (indicator === 'CPI') {

      return this.getDetailCPI(date);

    } else if (indicator === 'UF') {

      return this.getDetailUF(date);

    } else if (indicator === 'UTM') {

      return this.getDetailUTM(date);
    }
  }
}
