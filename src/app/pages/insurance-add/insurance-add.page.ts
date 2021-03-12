import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceService } from 'src/app/providers/insurance.service';
import { VehiclesService } from 'src/app/providers/vehicles.service';
import { PaymentmethodService } from 'src/app/providers/paymentmethod.service';
import { VehicleuseService } from 'src/app/providers/vehicleuse.service';
import { InsurancefreqService } from 'src/app/providers/insurancefreq.service';
import { InsurancetypeService } from 'src/app/providers/insurancetype.service';
import { LicencefreqService } from 'src/app/providers/licencefreq.service';
@Component({
  selector: 'app-insurance-add',
  templateUrl: './insurance-add.page.html',
  styleUrls: ['./insurance-add.page.scss'],
})
export class InsuranceAddPage implements OnInit {
 public vehicleuses : any =[];
 public methods : any =[];
 public frequences : any =[];
 public types : any =[];
 public licences : any =[];
    [x: string]: any;
    makes: any[];
    make: any;
    model: any;
    
    form: FormGroup = new FormGroup({
    
      vehicle_id: new FormControl('', Validators.required),
      vehicle_name: new FormControl('',Validators.required),
      freq: new FormControl('', Validators.required),
      method: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      vehicle_use: new FormControl('', Validators.required),
      licence: new FormControl('', Validators.required),
    })
    vehicles: any[];
    
    constructor(
      private vehicleService: VehiclesService,
      private paymentmethodService: PaymentmethodService,
      private insurancefreqService: InsurancefreqService,
      private vehicleuseService: VehicleuseService,
      private insuranceService: InsuranceService,
      private licencefreqService: LicencefreqService,
      private insurancetypeService: InsurancetypeService,
      private router: Router,
      private route: ActivatedRoute,
  
    ) { }
  
    ngOnInit() {
      this.form.get("vehicle_id").valueChanges.subscribe(id => {
        console.log(id)
        console.log(this.vehicles)
        const vehicle = this.vehicles.find(v => v.id === id);
        this.form.get("vehicle_name").patchValue(vehicle.make_name + ' ' + vehicle.model_name)
      })
     
      this.vehicleuseService.getVehicleUses().subscribe((data: any[]) => {
        console.log(data);
        this.vehicleuses = data;
      })
      this.paymentmethodService.getMethods().subscribe((data: any[]) => {
        console.log(data);
        this.methods = data;
      })
      this.insurancefreqService.getFrequency().subscribe((data: any[]) => {
        console.log(data);
        this.frequences = data;
      })
      this.insurancetypeService.getType().subscribe((data: any[]) => {
        console.log(data);
        this.types = data;
      }) 
      this.licencefreqService.getLicence().subscribe((data: any[]) => {
        console.log(data);
        this.licences = data;
      })

    
      this.vehicleService.getVehicles().subscribe(data => {
        this.vehicles = data;
        console.log(data)
        
      })
    
    
    }
  
    onSubmit() {
      console.log(this.form.value);
      this.insuranceService.updateInsurance(this.form.value)
      this.router.navigateByUrl('insurance-list');
    }
  }  
