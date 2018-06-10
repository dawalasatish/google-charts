import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
declare var google: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {

  constructor (private _demoService: DemoService) { 
          google.charts.load('current', {'packages':['corechart']});
     }
data2: any;
public getFoods123() {
     this._demoService.getFoods().subscribe(
          data => { 
         this.data2 = data;
            console.log(this.data2);
            var data = new google.visualization.DataTable(this.data2);
            console.log(data);

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, {width: 400, height: 240});
           },
         err => console.error(err),
         () => console.log('done loading data')
       );
     }


  ngOnInit() {

    
     
    this.getFoods123();
   

     
 google.charts.setOnLoadCallback(this.getFoods123);

  }

}
