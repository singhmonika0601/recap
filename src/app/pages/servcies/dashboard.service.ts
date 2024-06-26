import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public http: HttpClient) { }

  getSummarizedText(data: any): Observable<any> {
    console.log(data);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>("https://summarize-news-production.up.railway.app/api/summarize", data, { headers });
  }

  fileUploadByAdmin(file: File): Observable<HttpEvent<any>> {
    let formData : FormData = new FormData();
    console.log(file);
    formData.append('file', file);
    formData.append('role', "admin");
    console.log(formData.get('file'));
    const req = new HttpRequest('POST', `https://summarize-news-production.up.railway.app/api/summarize-pdf`, formData);
    return this.http.request(req);
  }
}
