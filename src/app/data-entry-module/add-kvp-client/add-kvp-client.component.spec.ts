import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKvpClientComponent } from './add-kvp-client.component';

describe('AddKvpClientComponent', () => {
  let component: AddKvpClientComponent;
  let fixture: ComponentFixture<AddKvpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKvpClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddKvpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
