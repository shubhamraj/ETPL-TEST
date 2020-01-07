import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { MyTestService } from '../my-test.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  EmpDetails: FormGroup;
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  emplistData:any=[];

  constructor(private country:MyTestService, private toastr: ToastrService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
   
    this.EmpDetails = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      gender: ['', Validators.required],
      EmailID: ['', Validators.required],
      Design: [''],
      Code: [''],
      Develop: [''],
      Address: ['', Validators.required],
      Pincode: ['', Validators.required],
      Country: ['', Validators.required],
      State: [''],
      City: [''],
    });
    
    this.getCountries();
  }

  // get countries
  getCountries(){
    this.country.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
      },
    )
  }

  // get state 
  onChangeCountry(countryValue) {
    this.stateInfo=this.countryInfo[countryValue].States;
    //  this.cityInfo=this.stateInfo[0].Cities;
  }


  //get city
  onChangeState(stateValue) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
  }

  //on Submit
  onSubmit(value){
     if(this.EmpDetails.valid){
      var empData = value;
      if(localStorage.getItem('empData') != null){
        this.emplistData =  JSON.parse(atob(localStorage.getItem('empData')));
      }
      this.emplistData.push(empData);
      localStorage.setItem('empData',btoa(JSON.stringify(this.emplistData)));
      this.router.navigate(["emp-list"]);
    }

  }







}
