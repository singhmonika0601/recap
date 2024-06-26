import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../servcies/dashboard.service';

declare var $: any;

@Component({
  selector: 'app-upload-content',
  templateUrl: './upload-content.component.html',
  styleUrls: ['./upload-content.component.css']
})
export class UploadContentComponent implements OnInit {

  response:any;

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;
  fileUpload: any;
  fileError: any;
  fileselected = [];
  constructor(private formBuilder: FormBuilder, public servcie: DashboardService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        vasplus_multiple_files: ['', Validators.required],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    console.log(this.fileselected[0]);
    // const formData = new FormData();
    // formData.append('file', this.fileselected[0], 'filename.txt');
    // formData.append('name', 'John Doe');
    // console.log(formData);
    this.servcie.fileUploadByAdmin(this.fileselected[0]).subscribe((res:any) => {
      console.log(JSON.stringify(res));
      console.log(res.body[0].summary_text);
      console.log(res.summary_text);
      this.response = res.body[0].summary_text;
      sessionStorage.setItem('text', this.response);
    });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  selectFile(event: any) {
    this.fileUpload = 0;
    this.fileError = 0;
    this.fileselected = Array.from(event.target.files);
    console.log(this.fileselected);
    let formData: FormData = new FormData();
    this.fileselected.forEach(file => {
      formData.append("ss", file, "ss");
    })
    // formData.append('data', JSON.stringify(data));
    formData.append('role', "admin");
    console.log(formData);
  }
}
