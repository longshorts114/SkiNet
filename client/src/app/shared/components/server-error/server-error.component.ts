import { HttpErrorResponse } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  imports: [
    MatCard
  ],
  templateUrl: './server-error.component.html',
  styleUrl: './server-error.component.css',
})
export class ServerErrorComponent {
  error = signal<any | null>(null);

  constructor(private router:Router) {
    const navigation = this.router.currentNavigation();
    this.error.set(navigation?.extras.state?.['error']);
  }
}
