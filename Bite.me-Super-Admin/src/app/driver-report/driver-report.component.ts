import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-driver-report',
  templateUrl: './driver-report.component.html',
  styleUrls: ['./driver-report.component.scss']
})
export class DriverReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).on('click','.Days ul li',function(){
      $('.Days ul li').removeClass('active');
      $(this).addClass('active');
    });
  }

}
