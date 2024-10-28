import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contactForm';
  contactForm:FormGroup
  constructor(private fb:FormBuilder){
    let controls = {
      name: new FormControl('',[] ),
      email: new FormControl('',[] ),
      subject: new FormControl('',[] ),
      message: new FormControl('',[] )
    }
    this.contactForm = this.fb.group(controls)
  }
  send(){
    console.log(this.contactForm.value);
    
    
  }
}
