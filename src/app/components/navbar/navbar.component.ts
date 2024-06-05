import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `<nav class="navbar bg-base-200 px-8 h-16">
    <h1 class="text-xl font-bold">Zoneless Pokedex</h1>
  </nav>`,
})
export class NavbarComponent {}
