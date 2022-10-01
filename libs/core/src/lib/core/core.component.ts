import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ag-forms-core',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
