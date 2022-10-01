import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindCdkComponent } from './tailwindcss-forms.component';

describe('TailwindCdkComponent', () => {
  let component: TailwindCdkComponent;
  let fixture: ComponentFixture<TailwindCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TailwindCdkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TailwindCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
