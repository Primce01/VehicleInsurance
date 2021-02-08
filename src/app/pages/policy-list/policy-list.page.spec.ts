import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolicyListPage } from './policy-list.page';

describe('PolicyListPage', () => {
  let component: PolicyListPage;
  let fixture: ComponentFixture<PolicyListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolicyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
