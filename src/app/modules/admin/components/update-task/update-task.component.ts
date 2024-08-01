import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent {

  id:number = this.route.snapshot.params["id"];
  updateTaskForm!: FormGroup;
  listOfEmployees:any=[];
  listOfPriorities:any=["LOW","MEDIUM","HIGH"];
  listOfTaskStatus:any=["PENDING","INPROGRESS","COMPLETED","DEFERRED","CANCELLED"];


  constructor(private service:AdminService,
    private route: ActivatedRoute,
    private fb:FormBuilder, 
    private snackbar:MatSnackBar,
    private router: Router
  ){

    this.getUsers();
    this.getTaskById();
    
    

     this.updateTaskForm = this.fb.group({
      employeeId:[null,[Validators.required]],
      title:[null,[Validators.required]],
      description:[null,[Validators.required]],
      dueDate:[null,[Validators.required]],
      priority:[null,[Validators.required]],
      taskStatus:[null,[Validators.required]],
     })

  }

  getUsers(){
    this.service.getUsers().subscribe((res)=>{
      this.listOfEmployees=res;
      console.log(res);
    })
  }

  getTaskById(){
    this.service.getTaskById(this.id).subscribe((res)=>{
      this.updateTaskForm.patchValue(res); 
      console.log(res);
      })
  }

 

  updateTask(){
    console.log("HELLO" + this.updateTaskForm.value);
    this.service.updateTask(this.id,this.updateTaskForm.value).subscribe((res)=>{
      if(res.id != null){
        this.snackbar.open("Task updated successfully","close",{duration:2000});
        this.router.navigateByUrl("/admin/dashboard");
      }
      else{
        this.snackbar.open("Failed to update task","ERROR",{duration:2000});
      }
    })
  }

}
