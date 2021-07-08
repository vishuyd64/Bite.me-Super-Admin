import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-driver-management',
  templateUrl: './driver-management.component.html',
  styleUrls: ['./driver-management.component.scss']
})
export class DriverManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).on('click','.satellite ul li',function(){
      $('.satellite ul li').removeClass('active');
      $(this).addClass('active');
    });
    $(document).on('click','.showData',function(){
      $('.driverDetail.square.square-bottom.clickDisplay').slideDown();
      $('.mapLocation .driverDetail.clickDemo').hide();
      $('.showData').hide();
    });
  }

}
