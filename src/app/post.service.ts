import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

@Injectable()
export class PostService {
url = 'https://jsonplaceholder.typicode.com/posts/1';

constructor(private httpClient: HttpClient) { }


getPosts(): Observable<{}> {
  return this.httpClient.get(this.url).pluck('body');
}
}
