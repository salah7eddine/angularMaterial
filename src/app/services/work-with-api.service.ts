import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkWithApiService {
  private finalData = [];
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  private apiUrlPost = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl);
  }

  getPostsData() {
    return this.http.get(this.apiUrlPost);
  }
}
