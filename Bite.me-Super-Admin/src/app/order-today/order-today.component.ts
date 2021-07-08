import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-order-today',
  templateUrl: './order-today.component.html',
  styleUrls: ['./order-today.component.scss']
})
export class OrderTodayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#Accept").click(function(){
      $("body").addClass("side-open");  
      $("#OrderStatus").css({"transform": "translate(0%, 0px)"});
  });

  $(".Closesidebar").click(function(){
    $("body").removeClass("side-open");  
    $(".Sidebar").css({"transform": "translate(120%, 0px)"});
});
  }

}
