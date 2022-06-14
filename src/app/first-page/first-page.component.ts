import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private dataService: DataService) { }

  // userData: any={} 
  addUser = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    phoneNum: new FormControl(''),
    email: new FormControl('')
  });

  ngOnInit(): void {
    
  }

  saveData(){
    this.dataService.serviceSaveData(this.addUser.value).subscribe((result)=>{console.log(result);});
  };
    // this.userData = data;
    // this.dataService.userData$.next(this.userData)
}

