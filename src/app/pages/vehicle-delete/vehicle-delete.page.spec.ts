import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehicleDeletePage } from './vehicle-delete.page';

describe('VehicleDeletePage', () => {
  let component: VehicleDeletePage;
  let fixture: ComponentFixture<VehicleDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
