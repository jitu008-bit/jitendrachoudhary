import { Component, OnInit } from '@angular/core';

interface StockDetails{
    companyName: String, 
     costPrice : number,
     volume : number, 
     vwap : number, 
     holding : boolean
}

@Component({
  selector: 'app-stockcomponent',
  templateUrl: './stockcomponent.component.html',
  styleUrls: ['./stockcomponent.component.css']
})
export class StockcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  stockName:string = "";
  isAccepted:boolean = false;
  boughtStocks:StockDetails[] = [];
  stockdetails : StockDetails[]  = 
    [{
     companyName: "Wipro", 
     costPrice : 2200, 
     volume : 3, 
     vwap : 2210, 
     holding : true
    },
    {
     companyName: "TCS", 
     costPrice : 2500, 
     volume : 5, 
     vwap : 2489, 
     holding : true
    } ]

    getAllStocks():StockDetails[]{
      return this.stockdetails;
    }

    getBidCost(cost:string, name:string){
      let userCost:number = parseInt(cost);
  
      this.stockdetails.forEach(stock=>{
        let buyCost:number = stock.costPrice - (0.01*stock.costPrice);
        if(stock.companyName.localeCompare(name) == 0 && (userCost<=stock.costPrice && userCost>= buyCost)){
          this.isAccepted = true;
          this.stockName=name;
        }
      });
    }
    doBuyStock(){
      this.stockdetails.forEach(stock=>{
        if(stock.companyName.localeCompare(this.stockName) == 0){
          stock.holding=true;
          this.boughtStocks.push(stock);
        }
    });
  }
  getAllBoughtStocks() : StockDetails[]{
    return this.boughtStocks;
  }
}
