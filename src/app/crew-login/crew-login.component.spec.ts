import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewLoginComponent } from './crew-login.component';

describe('CrewLoginComponent', () => {
  let component: CrewLoginComponent;
  let fixture: ComponentFixture<CrewLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
