import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsuranceUpdatePage } from './insurance-update.page';

describe('InsuranceUpdatePage', () => {
  let component: InsuranceUpdatePage;
  let fixture: ComponentFixture<InsuranceUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
