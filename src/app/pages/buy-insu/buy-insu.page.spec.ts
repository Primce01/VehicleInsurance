import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyInsuPage } from './buy-insu.page';

describe('BuyInsuPage', () => {
  let component: BuyInsuPage;
  let fixture: ComponentFixture<BuyInsuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyInsuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyInsuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
