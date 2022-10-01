import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindFormsComponent } from './tailwindcss-forms.component';

describe('TailwindFormsComponent', () => {
  let component: TailwindFormsComponent;
  let fixture: ComponentFixture<TailwindFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TailwindFormsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TailwindFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
