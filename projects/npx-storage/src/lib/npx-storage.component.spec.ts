import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpxStorageComponent } from './npx-storage.component';

describe('NpxStorageComponent', () => {
  let component: NpxStorageComponent;
  let fixture: ComponentFixture<NpxStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpxStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpxStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
