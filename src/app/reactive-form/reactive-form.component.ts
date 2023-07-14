import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder} from "@angular/forms"

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  {
  submitForm:boolean = false;
  name:any
  name1:any; 

  constructor(private fb:FormBuilder){}

  loginform:any = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    country: ['', Validators.required],
    subject: ['', Validators.required],
    number: ['', [Validators.required,Validators.minLength(10)]]
  })

  // loginform:any=new FormGroup({
  //   firstname:new FormControl('',[Validators.required]),
  //   lastname:new FormControl('',Validators.required,),
  //   country:new FormControl('',Validators.required),
  //   subject:new FormControl(''),
  //   number:new FormControl('',[Validators.required,Validators.minLength(6)])
  // })
  
  Usersubmit(){
    if (this.loginform.valid) {
      console.log('vgsvgvsv')
        console.log(this.loginform.value);
        
    } else {
      this.submitForm = true;
    }
  
  }

//  get  firstname (){
//   return this.loginform.get('firstname')
//  }
// //  get  lastname (){
// //   return this.loginform.get('lastname')
// //  }
//  get  country (){
//   return this.loginform.get('country')
//  }
// //  get  subject (){
// //   return this.loginform.get('subject')
// //  }
//  get number (){
//   return this.loginform.get('number')
//  }
}

