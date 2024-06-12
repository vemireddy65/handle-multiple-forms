import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public formGroup!: FormGroup;
  public formGroup2!: FormGroup;
  isPermt!:boolean;
  
  constructor (
    private fb: FormBuilder
  ){
    
  }
  ngOnInit(): void {
    this.formInit();
  }

  public formInit(): void {
    this.formGroup = this.fb.group({
      email:new FormControl('',[Validators.required]),
      pwd:new FormControl('',[Validators.required]),
      add1:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      zip:new FormControl('',[Validators.required]),
    });
    this.formGroup2 = this.fb.group({
      add2:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      zip:new FormControl('',[Validators.required]),
    });
  }

  public isPerminent(event:any): void{
    console.log(event.target.checked);
    if (event.target.checked) {
      // this.formGroup2 = this.fb.group({
      //   add2:new FormControl(this.formGroup.value.add1,[Validators.required]),
      //   city:new FormControl(this.formGroup.value.city,[Validators.required]),
      //   zip:new FormControl(this.formGroup.value.zip,[Validators.required]),
      // });
      this.formGroup2.patchValue({
        add2: this.formGroup.value.add1,
        city: this.formGroup.value.city,
        zip: this.formGroup.value.zip,
      });
    } else {
      // this.formGroup2 = this.fb.group({
      //   add2:new FormControl('',[Validators.required]),
      //   city:new FormControl('',[Validators.required]),
      //   zip:new FormControl('',[Validators.required]),
      // });
      this.formGroup2.reset();
    }    
    
  }

}
