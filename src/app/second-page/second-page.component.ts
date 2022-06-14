import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
}) 

export class SecondPageComponent implements OnInit {
  
  constructor(private dataService: DataService) { }
  
  users: any = [];

  ngOnInit(): void { 
    this.dataService.getUsers().subscribe((allData) =>{console.log(allData);this.users = allData 
  });
  }

  // ngOnInit(): void { 
    // this.dataService.userData$.subscribe(x=>{
    //   console.log(x, 'something');
    //   this.userData = x
      
    // })
  // }
}
