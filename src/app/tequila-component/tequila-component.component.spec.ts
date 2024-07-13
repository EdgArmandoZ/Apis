import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TequilaComponentComponent } from './tequila-component.component';

describe('TequilaComponentComponent', () => {
  let component: TequilaComponentComponent;
  let fixture: ComponentFixture<TequilaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TequilaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TequilaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
