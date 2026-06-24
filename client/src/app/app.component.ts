import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'zone.js';
import { HeaderComponent } from "./layout/header/header.component";
import { ShopComponent } from "./features/shop/shop.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Skinet';

  //constructor(private http:HttpClient){} consturctor way of dependency injection
}

