import { Component } from '@angular/core';

@Component({
  selector: 'app-otherservices',
  templateUrl: './otherservices.component.html',
  styleUrls: ['./otherservices.component.scss']
})
export class OtherservicesComponent {
  show1=true;
  clicknew1(){
    this.show1=!this.show1;
  }

  show2=true;
  clicknew2(){
    this.show2=!this.show2;
  }

  show3=true;
  clicknew3(){
    this.show3=!this.show3;
  }

  show4=true;
  clicknew4(){
    this.show4=!this.show4;
  }

  show5=true;
  clicknew5(){
    this.show5=!this.show5;
  }

  show6=true;
  clicknew6(){
    this.show6=!this.show6;
  }
}
