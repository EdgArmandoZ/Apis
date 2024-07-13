import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodkaComponentComponent } from './vodka-component.component';

describe('VodkaComponentComponent', () => {
  let component: VodkaComponentComponent;
  let fixture: ComponentFixture<VodkaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VodkaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VodkaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
