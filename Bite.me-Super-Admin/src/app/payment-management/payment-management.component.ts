import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-payment-management',
  templateUrl: './payment-management.component.html',
  styleUrls: ['./payment-management.component.scss']
})
export class PaymentManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $(document).on('click','.Days ul li',function(){
      $('.Days ul li').removeClass('active');
      $(this).addClass('active');
    });
  }

}
