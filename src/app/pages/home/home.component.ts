import { PageShellComponent } from '@/components/page-shell';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [PageShellComponent],
  template: `<app-page-shell>Home page</app-page-shell>`,
})
export class HomePageComponent {}
