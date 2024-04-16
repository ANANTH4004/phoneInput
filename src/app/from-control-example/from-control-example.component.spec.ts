import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromControlExampleComponent } from './from-control-example.component';

describe('FromControlExampleComponent', () => {
  let component: FromControlExampleComponent;
  let fixture: ComponentFixture<FromControlExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FromControlExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromControlExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
