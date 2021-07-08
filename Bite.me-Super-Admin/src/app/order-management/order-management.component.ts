import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent implements OnInit {

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


    $(document).on('click','.Days ul li',function(){
      $('.Days ul li').removeClass('active');
      $(this).addClass('active');
    });
    
  }

}
