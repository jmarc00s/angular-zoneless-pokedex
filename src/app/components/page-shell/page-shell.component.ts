import { Component } from '@angular/core';

@Component({
  selector: 'app-page-shell',
  standalone: true,
  template: `<section class="container mx-auto h-full overflow-auto py-4"><ng-content></ng-content></section>`,
})
export class PageShellComponent {}
