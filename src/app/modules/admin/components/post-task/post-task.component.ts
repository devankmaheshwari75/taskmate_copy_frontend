import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { dateNotInPast } from 'src/app/validators/date-validators';

@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.scss']
})
export class PostTaskComponent {

  taskForm!: FormGroup;
  listOfEmployees:any=[];
  listOfPriorities:any=["LOW","MEDIUM","HIGH"];
  assignedDate: Date = new Date();  

 
  constructor(private adminService:AdminService,
    private fb:FormBuilder,
    private snackbar:MatSnackBar,
    private router:Router
  ){
  
    this.getUsers();
    this.taskForm= this.fb.group({
      employeeId:  [null,[Validators.required]],
      title:       [null,[Validators.required]],
      description: [null,[Validators.required]],
      dueDate: [null, [Validators.required, dateNotInPast()]], 

      priority:    [null,[Validators.required]],
      assignedDate: [{ value: new Date(), disabled: false }]  


      

    })


  }

  getUsers(){
    this.adminService.getUsers().subscribe((res)=>{
      this.listOfEmployees=res;
      console.log(res);
      })
  }

  postTask(){

    const formValue = {  
      ...this.taskForm.value,  
      assignedDate: this.assignedDate // Add the assigned date here  
  };  
    console.log(formValue);
    this.adminService.postTask(formValue).subscribe((res)=>{
      if(res.id != null){
        this.snackbar.open("Task posted successfully","close",{duration:2000});
        this.router.navigateByUrl("/admin/dashboard");
      }
      else{
        this.snackbar.open("Failed to post task","ERROR",{duration:2000});
      }
    })
  }
}
