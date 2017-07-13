import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Directives';
  isVisible=false;
  firstName:string;
  title1:string;
  lastName:string;
  allStudents:string[] = [];
  
  showForm() {
    this.isVisible=true;
  }

  hideForm() {
    this.isVisible=false;
  }

  addTitle() {

    this.title1 = this.firstName+' '+this.lastName;
    this.isVisible=true;
  }


  
  addStudent() {

    // this indexof fuction will prevent our array to get any duplicate name 
    
    if (this.allStudents.indexOf(this.firstName) == -1) {
    this.allStudents.push(this.firstName);
     }
    

  }   
}
