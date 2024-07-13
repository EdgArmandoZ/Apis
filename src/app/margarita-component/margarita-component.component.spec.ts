import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargaritaComponentComponent } from './margarita-component.component';

describe('MargaritaComponentComponent', () => {
  let component: MargaritaComponentComponent;
  let fixture: ComponentFixture<MargaritaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MargaritaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MargaritaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
