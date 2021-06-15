import { TestServiceService } from './../test-service.service';
import { TestDetails } from './../test-details';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  __testServiceService:TestServiceService;
  tests:number = 0;
  constructor(ps:TestServiceService) {
    this.__testServiceService = ps;
   }

  ngOnInit(): void {
  }

getAllTests():TestDetails[]
{

  return this.__testServiceService.getAllTests();
}

addTest(){
  this.tests++;
  console.log(this.tests);
}

share(){
  console.log("details are Shared");
}
}