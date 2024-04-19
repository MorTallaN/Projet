import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoscommandeComponent } from './infoscommande.component';

describe('InfoscommandeComponent', () => {
  let component: InfoscommandeComponent;
  let fixture: ComponentFixture<InfoscommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoscommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoscommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
