import { Component } from '@angular/core';
import { MyTestService } from './my-test.service';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-test-app';



  public constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

  
  }

 

}
