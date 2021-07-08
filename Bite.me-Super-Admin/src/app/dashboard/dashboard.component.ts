import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
declare var $: any;



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  myVar1 = false;
  myVar2 = false;
  constructor() { }

  ngOnInit() {
    this.chart1()
    this.chart2()
    this.chart3()
    this.chart4()
    this.chart5()
    this.chart6()
    this.chart7()
    this.chart8()
    this.chart9()
    
    $(document).on('click','.Days ul li',function(){
      $('.Days ul li').removeClass('active');
      $(this).addClass('active');
    });


  }
  chart1(){

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
    
let chart = am4core.create("chartdiv", am4charts.XYChart);
chart.paddingRight = 20;
chart.paddingBottom = 0;
chart.paddingLeft = 0;

let data = [];
let visits = 10;
let previousValue;

for (var i = 0; i < 100; i++) {
    visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

    if(i > 0){
        // add color to previous data item depending on whether current value is less or more than previous value
        if(previousValue <= visits){
            data[i - 1].color = chart.colors.getIndex(0);
        }
        // else{
        //     data[i - 1].color = chart.colors.getIndex(5);
        // }
    }     
    
    data.push({ date: new Date(2018, 0, i + 1), value: visits });
    previousValue = visits;
}

chart.data = data;

let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.grid.template.location = 0;
dateAxis.renderer.axisFills.template.disabled = true;
dateAxis.renderer.ticks.template.disabled = true;
dateAxis.renderer.grid.template.stroke = am4core.color("#ffffff");

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.minWidth = 35;
valueAxis.renderer.axisFills.template.disabled = true;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
// valueAxis.renderer.line.stroke = am4core.color("#3787ac");

let series = chart.series.push(new am4charts.LineSeries());
series.dataFields.dateX = "date";
series.dataFields.valueY = "value";
series.strokeWidth = 2;
// series.line.stroke = am4core.color("#3787ac");
series.tooltipText = "value: {valueY}, day change: {valueY.previousChange}";

// set stroke property field
series.propertyFields.stroke = "color";

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineY.opacity = 0;


let scrollbarX = new am4core.Scrollbar();
chart.scrollbarX = scrollbarX;

dateAxis.start = 0.7;
dateAxis.keepSelection = true;

$(document).ready(function(){
  $("g[aria-labelledby]").hide();
})
  }

  chart2(){

    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
        
    let chart = am4core.create("chartdiv2", am4charts.XYChart);
    chart.paddingRight = 20;
    chart.paddingBottom = 0;
    chart.paddingLeft = 0;
    
    let data = [];
    let visits = 10;
    let previousValue;
    
    for (var i = 0; i < 100; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    
        if(i > 0){
            // add color to previous data item depending on whether current value is less or more than previous value
            if(previousValue <= visits){
                data[i - 1].color = chart.colors.getIndex(0);
            }
            // else{
            //     data[i - 1].color = chart.colors.getIndex(5);
            // }
        }     
        
        data.push({ date: new Date(2018, 0, i + 1), value: visits });
        previousValue = visits;
    }
    
    chart.data = data;
    
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;
    dateAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    // valueAxis.renderer.line.stroke = am4core.color("#3787ac");
    
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    // series.line.stroke = am4core.color("#3787ac");
    series.tooltipText = "value: {valueY}, day change: {valueY.previousChange}";
    
    // set stroke property field
    series.propertyFields.stroke = "color";
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    
    
    let scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX = scrollbarX;
    
    dateAxis.start = 0.7;
    dateAxis.keepSelection = true;
    
    $(document).ready(function(){
      $("g[aria-labelledby]").hide();
    })
  }

  chart3(){

    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
        
    let chart = am4core.create("chartdiv3", am4charts.XYChart);
    chart.paddingRight = 20;
    chart.paddingBottom = 0;
    chart.paddingLeft = 0;
    
    let data = [];
    let visits = 10;
    let previousValue;
    
    for (var i = 0; i < 100; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    
        if(i > 0){
            // add color to previous data item depending on whether current value is less or more than previous value
            if(previousValue <= visits){
                data[i - 1].color = chart.colors.getIndex(0);
            }
            // else{
            //     data[i - 1].color = chart.colors.getIndex(5);
            // }
        }     
        
        data.push({ date: new Date(2018, 0, i + 1), value: visits });
        previousValue = visits;
    }
    
    chart.data = data;
    
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;
    dateAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    // valueAxis.renderer.line.stroke = am4core.color("#3787ac");
    
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    // series.line.stroke = am4core.color("#3787ac");
    series.tooltipText = "value: {valueY}, day change: {valueY.previousChange}";
    
    // set stroke property field
    series.propertyFields.stroke = "color";
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    
    
    let scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX = scrollbarX;
    
    dateAxis.start = 0.7;
    dateAxis.keepSelection = true;
    
    $(document).ready(function(){
      $("g[aria-labelledby]").hide();
    })
  }

  chart4(){

    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
        
    let chart = am4core.create("chartdiv4", am4charts.XYChart);
    chart.paddingRight = 20;
    chart.paddingBottom = 0;
    chart.paddingLeft = 0;
    
    let data = [];
    let visits = 10;
    let previousValue;
    
    for (var i = 0; i < 100; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    
        if(i > 0){
            // add color to previous data item depending on whether current value is less or more than previous value
            if(previousValue <= visits){
                data[i - 1].color = chart.colors.getIndex(0);
            }
            // else{
            //     data[i - 1].color = chart.colors.getIndex(5);
            // }
        }     
        
        data.push({ date: new Date(2018, 0, i + 1), value: visits });
        previousValue = visits;
    }
    
    chart.data = data;
    
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;
    dateAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    // valueAxis.renderer.line.stroke = am4core.color("#3787ac");
    
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    // series.line.stroke = am4core.color("#3787ac");
    series.tooltipText = "value: {valueY}, day change: {valueY.previousChange}";
    
    // set stroke property field
    series.propertyFields.stroke = "color";
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    
    
    let scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX = scrollbarX;
    
    dateAxis.start = 0.7;
    dateAxis.keepSelection = true;
    
    $(document).ready(function(){
      $("g[aria-labelledby]").hide();
    })
  }

  chart5(){

    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
        
    let chart = am4core.create("chartdiv5", am4charts.XYChart);
    chart.paddingRight = 20;
    chart.paddingBottom = 0;
    chart.paddingLeft = 0;
    
    let data = [];
    let visits = 10;
    let previousValue;
    
    for (var i = 0; i < 100; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    
        if(i > 0){
            // add color to previous data item depending on whether current value is less or more than previous value
            if(previousValue <= visits){
                data[i - 1].color = chart.colors.getIndex(0);
            }
            // else{
            //     data[i - 1].color = chart.colors.getIndex(5);
            // }
        }     
        
        data.push({ date: new Date(2018, 0, i + 1), value: visits });
        previousValue = visits;
    }
    
    chart.data = data;
    
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;
    dateAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    // valueAxis.renderer.line.stroke = am4core.color("#3787ac");
    
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    // series.line.stroke = am4core.color("#3787ac");
    series.tooltipText = "value: {valueY}, day change: {valueY.previousChange}";
    
    // set stroke property field
    series.propertyFields.stroke = "color";
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    
    
    let scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX = scrollbarX;
    
    dateAxis.start = 0.7;
    dateAxis.keepSelection = true;
    
    $(document).ready(function(){
      $("g[aria-labelledby]").hide();
    })
  }

  chart6(){

    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
        
    let chart = am4core.create("chartdiv6", am4charts.XYChart);
    chart.paddingRight = 20;
    chart.paddingBottom = 0;
    chart.paddingLeft = 0;
    
    let data = [];
    let visits = 10;
    let previousValue;
    
    for (var i = 0; i < 100; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    
        if(i > 0){
            // add color to previous data item depending on whether current value is less or more than previous value
            if(previousValue <= visits){
                data[i - 1].color = chart.colors.getIndex(0);
            }
            // else{
            //     data[i - 1].color = chart.colors.getIndex(5);
            // }
        }     
        
        data.push({ date: new Date(2018, 0, i + 1), value: visits });
        previousValue = visits;
    }
    
    chart.data = data;
    
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;
    dateAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    // valueAxis.renderer.line.stroke = am4core.color("#3787ac");
    
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    // series.line.stroke = am4core.color("#3787ac");
    series.tooltipText = "value: {valueY}, day change: {valueY.previousChange}";
    
    // set stroke property field
    series.propertyFields.stroke = "color";
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    
    
    let scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX = scrollbarX;
    
    dateAxis.start = 0.7;
    dateAxis.keepSelection = true;
    
    $(document).ready(function(){
      $("g[aria-labelledby]").hide();
    })
  }

  chart7(){

    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
        
    let chart = am4core.create("chartdiv7", am4charts.XYChart);
    chart.paddingRight = 20;
    chart.paddingBottom = 0;
    chart.paddingLeft = 0;
    
    let data = [];
    let visits = 10;
    let previousValue;
    
    for (var i = 0; i < 100; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    
        if(i > 0){
            // add color to previous data item depending on whether current value is less or more than previous value
            if(previousValue <= visits){
                data[i - 1].color = chart.colors.getIndex(0);
            }
            // else{
            //     data[i - 1].color = chart.colors.getIndex(5);
            // }
        }     
        
        data.push({ date: new Date(2018, 0, i + 1), value: visits });
        previousValue = visits;
    }
    
    chart.data = data;
    
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;
    dateAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    // valueAxis.renderer.line.stroke = am4core.color("#3787ac");
    
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    // series.line.stroke = am4core.color("#3787ac");
    series.tooltipText = "value: {valueY}, day change: {valueY.previousChange}";
    
    // set stroke property field
    series.propertyFields.stroke = "color";
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    
    
    let scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX = scrollbarX;
    
    dateAxis.start = 0.7;
    dateAxis.keepSelection = true;
    
    $(document).ready(function(){
      $("g[aria-labelledby]").hide();
    })
  }

  chart8(){

    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
        
    let chart = am4core.create("chartdiv8", am4charts.XYChart);
    chart.paddingRight = 20;
    chart.paddingBottom = 0;
    chart.paddingLeft = 0;
    
    let data = [];
    let visits = 10;
    let previousValue;
    
    for (var i = 0; i < 100; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    
        if(i > 0){
            // add color to previous data item depending on whether current value is less or more than previous value
            if(previousValue <= visits){
                data[i - 1].color = chart.colors.getIndex(0);
            }
            // else{
            //     data[i - 1].color = chart.colors.getIndex(5);
            // }
        }     
        
        data.push({ date: new Date(2018, 0, i + 1), value: visits });
        previousValue = visits;
    }
    
    chart.data = data;
    
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;
    dateAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    // valueAxis.renderer.line.stroke = am4core.color("#3787ac");
    
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    // series.line.stroke = am4core.color("#3787ac");
    series.tooltipText = "value: {valueY}, day change: {valueY.previousChange}";
    
    // set stroke property field
    series.propertyFields.stroke = "color";
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    
    
    let scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX = scrollbarX;
    
    dateAxis.start = 0.7;
    dateAxis.keepSelection = true;
    
    $(document).ready(function(){
      $("g[aria-labelledby]").hide();
    })
  }

  chart9(){

    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
        
    let chart = am4core.create("chartdiv9", am4charts.XYChart);
    chart.paddingRight = 20;
    chart.paddingBottom = 0;
    chart.paddingLeft = 0;
    
    let data = [];
    let visits = 10;
    let previousValue;
    
    for (var i = 0; i < 100; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    
        if(i > 0){
            // add color to previous data item depending on whether current value is less or more than previous value
            if(previousValue <= visits){
                data[i - 1].color = chart.colors.getIndex(0);
            }
            // else{
            //     data[i - 1].color = chart.colors.getIndex(5);
            // }
        }     
        
        data.push({ date: new Date(2018, 0, i + 1), value: visits });
        previousValue = visits;
    }
    
    chart.data = data;
    
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;
    dateAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    // valueAxis.renderer.line.stroke = am4core.color("#3787ac");
    
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    // series.line.stroke = am4core.color("#3787ac");
    series.tooltipText = "value: {valueY}, day change: {valueY.previousChange}";
    
    // set stroke property field
    series.propertyFields.stroke = "color";
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    
    
    let scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX = scrollbarX;
    
    dateAxis.start = 0.7;
    dateAxis.keepSelection = true;
    
    $(document).ready(function(){
      $("g[aria-labelledby]").hide();
    })
  }


  changeDate(e: any) {
    console.log("===>", this.myVar1);
    if (this.myVar1 == false) {
    $("#dvPassport1").show();
    $(".Days ul li").removeClass("active");
    } else {
    $("#dvPassport1").hide();
    $(".Days ul li").removeClass("active");
    }
    }
    
    Close(){
    this.myVar1 = false
    $("#dvPassport1").hide();
    $(".Days ul li").addClass("active");
    }
}
