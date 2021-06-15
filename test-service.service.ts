import { Injectable } from '@angular/core';
import { TestDetails } from './test-details';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  getAllTests():TestDetails[]
  {
    let ColorBlindness:TestDetails={
      testName:'color blindness Test',
      testCost:10000,
      rating:3,
      description:'test for  color blindness test',
      image:"/assets/color blind.jpg"
    }
    let Retinoscopy:TestDetails={
      testName:'Retinoscopy',
      testCost:10000,
      rating:4,
      description:'test for laser treatment of eye',
      image:"/assets/retino.jpg"
    }

    let laserOperation:TestDetails={
      testName:'LaserTest-1',
      testCost:5000,
      rating:4,
      description:'test for laser treatment of eye',
      image:"/assets/laser.jpg"
    }
    
    return [laserOperation,ColorBlindness,Retinoscopy];
  }
}

