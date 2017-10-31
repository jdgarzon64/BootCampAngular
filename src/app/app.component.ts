import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  results$;
  title = 'app';
  miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arrayNames = ["Juan", "David", "Diego", "Santiago", "Carlos"];

  returnURL() {
    return "https://api.adorable.io/avatars/85/" + Math.random() * 23;
  }
  constructor(private http: HttpClient) {
    this.results$=http.get("https://jsonplaceholder.typicode.com/posts/1");
  /*
  constructor(private http: HttpClient) {
    http.get("https://jsonplaceholder.typicode.com/posts/1").subscribe(data => {
    this.results = data;
    });
*/

  }

}
