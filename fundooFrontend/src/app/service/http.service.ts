import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = environment.baseUrl;



  constructor(private http: HttpClient,
    private route: ActivatedRoute, ) { }
  token = this.route.snapshot.paramMap.get('token');

  public postRequest(url: any, data: any): any {
    return this.http.post(this.baseurl + url, data);
  }

  public putRequest(url: any): any {
    return this.http.put(this.baseurl + url, "", { headers: new HttpHeaders().set("jwtToken", localStorage.getItem('token')) });
  }

  public deleteRequest(url: any): any {
    return this.http.delete(this.baseurl + url);
  }

  public getRequest(url: any): any {
    return this.http.get(this.baseurl + url);
  }

}
