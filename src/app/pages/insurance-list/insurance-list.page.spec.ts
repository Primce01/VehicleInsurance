import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsuranceListPage } from './insurance-list.page';

describe('InsuranceListPage', () => {
  let component: InsuranceListPage;
  let fixture: ComponentFixture<InsuranceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
