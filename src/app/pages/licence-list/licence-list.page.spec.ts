import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LicenceListPage } from './licence-list.page';

describe('LicenceListPage', () => {
  let component: LicenceListPage;
  let fixture: ComponentFixture<LicenceListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenceListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
