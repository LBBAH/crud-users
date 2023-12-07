import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'crud-users';
  
  ngOnInit(): void {
    const apiKey = 'AIzaSyBEWYjQFO5aPqqgx3MR-XHS1dXrwBXBQgg';
    console.log(apiKey)
  }
}
