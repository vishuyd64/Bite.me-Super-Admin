import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-menu-mix',
  templateUrl: './menu-mix.component.html',
  styleUrls: ['./menu-mix.component.scss']
})
export class MenuMixComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).on('click','.Days ul li',function(){
      $('.Days ul li').removeClass('active');
      $(this).addClass('active');
    });
  }

}
