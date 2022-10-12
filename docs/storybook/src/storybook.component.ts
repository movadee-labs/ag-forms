import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-task',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './storybook.component.html',
  styles: [],
})
export class StorybookComponent {
  @Input() form_schema: any;
  @Input() framework: any;
}
