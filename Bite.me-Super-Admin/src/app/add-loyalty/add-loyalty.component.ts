import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-loyalty',
  templateUrl: './add-loyalty.component.html',
  styleUrls: ['./add-loyalty.component.scss']
})
export class AddLoyaltyComponent implements OnInit {
  public newUserForm = true
  public basedForm = true 

  constructor() { }

  ngOnInit() {
  }
  changeUser(e: any) {
    console.log(e.target.value);
    if(e.target.value==='NewUser'){
      this.newUserForm=true
    }
    if(e.target.value==='ExistedUser'){
      this.newUserForm=false
    }
}

changeBased(e: any) {
    console.log(e.target.value); 
    if(e.target.value==='Percentage'){
      this.basedForm=true
    }
    if(e.target.value==='Item'){
      this.basedForm=false
    }
}
}
