import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineComponentComponent } from './wine-component.component';

describe('WineComponentComponent', () => {
  let component: WineComponentComponent;
  let fixture: ComponentFixture<WineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WineComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
