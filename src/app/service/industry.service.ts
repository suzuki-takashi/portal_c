import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Industry } from '../class/bm003-industry';
//import { INDUSTRIES } from '../mock-industry';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  private industriesUrl = "http://localhost:8080/api/industryList";  // Web APIのURL
  //private industriesUrl = "https://portalemd.herokuapp.com/api/industryList";  // Web APIのURL

  constructor(
    private http: HttpClient
    ) { }

  getIndustries(): Observable<Industry[]> {
    console.log('ok');
    return this.http.get<Industry[]>(this.industriesUrl)
    .pipe(
      //tap(industries => this.log('fetched heroes')),
      catchError(this.handleError<Industry[]>('getIndustries', []))
    );
  }

/**
 * 失敗したHttp操作を処理します。
 * アプリを持続させます。
 * @param operation - 失敗した操作の名前
 * @param result - observableな結果として返す任意の値
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: リモート上のロギング基盤にエラーを送信する
    console.error(error); // かわりにconsoleに出力

    // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
    //this.log(`${operation} failed: ${error.message}`);

    // 空の結果を返して、アプリを持続可能にする
    return of(result as T);
  };
}
}
