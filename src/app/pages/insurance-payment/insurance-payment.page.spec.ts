import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsurancePaymentPage } from './insurance-payment.page';

describe('InsurancePaymentPage', () => {
  let component: InsurancePaymentPage;
  let fixture: ComponentFixture<InsurancePaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancePaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsurancePaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
