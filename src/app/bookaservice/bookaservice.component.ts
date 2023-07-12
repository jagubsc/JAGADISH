import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-bookaservice',
  templateUrl: './bookaservice.component.html',
  styleUrls: ['./bookaservice.component.scss']
})
export class BookaserviceComponent {
  //https://retoolapi.dev/VUHBea/service
  user:String="";
  email:String="";
  num:String="";
  pcode:String="";
  msg:String="";
  constructor(public http:HttpClient){}
  service()
  {
    let names:any=this.user;
    let emails:any=this.email;
    let nums:any=this.num;
    let pcodes:any=this.pcode;
    let msgs:any=this.msg;


    let namepattern=/^[a-zA-Z\s]+$/;
    let nametest=namepattern.test(names);
    let emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailtest=emailpattern.test(emails);
    let numpattern=/^[6-9]\d{9}$|^[0-9]{10}$/;
    let numtest=numpattern.test(nums);
    let pcodepattern=/^[1-9][0-9]{5}$/;
    let pcodetest=pcodepattern.test(pcodes);
    let msgpattern=/^[a-zA-Z\s]+$/;
    let msgtest=msgpattern.test(msgs);
    console.log(nametest,emailtest,numtest,pcodetest,msgtest);

    
    if(nametest==true&&emailtest==true&&numtest==true&&pcodetest==true&&msgtest==true)
    {
       const datas={
        "User Name":names,
        "Email":emails,
        "Mob Num":nums,
        "Pin code":pcodes,
        "Message":msgs
       }
       let a:any=Number(localStorage.getItem('id'));
       if(a==0||a==null)
       {
        a=1;
          this.http.put("https://retoolapi.dev/VUHBea/service/"+a,datas).subscribe(
        ()=>{
          alert("Details Sent Successfully")
          this.email="";
          this.msg="";
          this.num="";
          this.pcode="";
          this.user="";
          a++;
          localStorage.setItem('id',a);  
        },
        err=>
        {
          a--;
           alert("Please Try Again")
           localStorage.setItem('id',a);  
        }
       )
        
       }
       else
       {
        let a:any=Number(localStorage.getItem('id'));
        this.http.put("https://retoolapi.dev/VUHBea/service/"+a,datas).subscribe(
          ()=>
          {
            alert("Details sent successfully");
            a++;
          this.email="";
          this.msg="";
          this.num="";
          this.pcode="";
          this.user="";
          localStorage.setItem('id',a);
          },
          err=>
          {
             a--;
             alert("Please Try Again");
             localStorage.setItem('id',a);
          }
        )
        
       }
    }
    else
    {
      alert("Please Check Your Entered Details")
    }
  }

}
