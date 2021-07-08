import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-cancelled-order',
  templateUrl: './cancelled-order.component.html',
  styleUrls: ['./cancelled-order.component.scss']
})
export class CancelledOrderComponent implements OnInit {

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
