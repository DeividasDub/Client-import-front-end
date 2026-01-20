import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePostcodesComponent } from './update-postcodes.component';

describe('UpdatePostcodesComponent', () => {
  let component: UpdatePostcodesComponent;
  let fixture: ComponentFixture<UpdatePostcodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePostcodesComponent]
    });
    fixture = TestBed.createComponent(UpdatePostcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
