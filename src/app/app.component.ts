import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';
  signinForm: FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.initForm();
    }

    isControlInvalid(controlName: string): boolean {
        const control = this.signinForm.controls[controlName];

        const result = control.invalid && control.touched;

        return result;
    }

    private initForm() {
        this.signinForm = this.fb.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]
            ],
            password: ['', [
                Validators.required,
                Validators.min(4)
            ]
            ]
        });
    }
}


