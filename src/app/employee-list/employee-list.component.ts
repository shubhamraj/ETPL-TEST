import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

@ViewChild("assetTble", { static: true }) table: any;
employeeDetails:any=[];
emplistData:any=[];
paramData:any;

public constructor(private route: ActivatedRoute, private router: Router) {
}

  ngOnInit() {
    if(localStorage.getItem('empData') != null){
      this.emplistData =  JSON.parse(atob(localStorage.getItem('empData')));
    }
  }

  //redirect to employee add page
  Back(){
    this.router.navigate([""]);
  }

  // destroy the current page excution
  ngOnDestroy() {
    this.employeeDetails = [];
    this.router.navigate(["add-emp"]);
  }

}
