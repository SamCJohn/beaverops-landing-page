import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudTabsComponent } from './cloud-tabs-component';

describe('CloudTabsComponent', () => {
  let component: CloudTabsComponent;
  let fixture: ComponentFixture<CloudTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
