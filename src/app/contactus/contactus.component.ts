import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
 //https://retoolapi.dev/gfwODh/contactus
 user:string="";
 email:string="";
 pcode:string="";
 user1:string="";
 pnum:string="";
 msg:string="";
 constructor (public http:HttpClient){}
 service(){
  let names:any=this.user;
  let emails:any=this.email;
  let pcodes:any=this.pcode;
  let users:any=this.user1;
  let pnums:any=this.pnum;
  let msgs:any=this.msg;

  let namepattern=/^[a-zA-Z\s]+$/;
  let nametest=namepattern.test(names);
  let emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailtest=emailpattern.test(emails);
  let pcodepattern=/^[1-9][0-9]{5}$/;
  let pcodetest=pcodepattern.test(pcodes);
  let userpattern=/^[a-zA-Z\s]+$/;
  let usertest=userpattern.test(users);
  let pnumpattern=/^[6-9]\d{9}$|[0-9]{10}$/;
  let pnumtest=pnumpattern.test(pnums);
  let msgpattern=/^[a-zA-Z\s]+$/;
  let msgtest=msgpattern.test(msgs);
  console.log(nametest,emailtest,pcodetest,usertest,pnumtest,msgtest);

  if(nametest==true&&emailtest==true&&pcodetest==true&&usertest==true&&pnumtest==true&&msgtest==true)
  {
    const datas={
      "User Name":names,
      "Email":emails,
      "Pin Code":pcodes,
      "Last Name":users,
      "Phone Number":pnums,
      "Message":msgs

    }
    let a:any=Number(localStorage.getItem('code'));
    if(a==0||a==null)
    {
      a=1;
      this.http.put("https://retoolapi.dev/gfwODh/contactus/"+a,datas).subscribe(
        ()=>{
          alert("Details Send Successfully")
          this.user="";
          this.email="";
          this.pcode="";
          this.user1="";
          this.pnum="";
          this.msg="";
          a++;
          localStorage.setItem('code',a);
        },
        err=>
        {
          a--;
          alert("Please Try Again");
          localStorage.setItem('code',a);
         }
      )
    }
    else
    {
      let a:any=Number(localStorage.getItem('code'));
      this.http.put("https://retoolapi.dev/gfwODh/contactus/"+a,datas).subscribe(
        ()=>{
          alert("Details Send Successfully")
          this.user="";
          this.email="";
          this.pcode="";
          this.user1="";
          this.pnum="";
          this.msg="";
          a++;
          localStorage.setItem('code',a);
        },
        err=>
        {
          a--;
          alert("Please Try Again");
          localStorage.setItem('code',a);
         }
      )

    }
  }
  else
  {
    alert("Please Check Your Entered Destails")
  }
 }


 }

