import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


listOfTask:any=[];
searchForm!:FormGroup

  constructor(private service: AdminService,
    private snackbar: MatSnackBar,
    private fb:FormBuilder
  ){
    this. getTasks();
    this.searchForm=this.fb.group({
      title : [null]
    })
  }

  getTasks(){
    this.service.getAllTask().subscribe((res)=>{
      console.log(res);
      this.listOfTask=res;
      
      })
  }
  
  deleteTask(id:number){
    this.service.deleteTask(id).subscribe((res)=>{
      this.snackbar.open("Task deleted successfully", "Close", {duration:5000});
      this.getTasks();
    })
  }

  searchTask(){
    this.listOfTask=[];
    const title = this.searchForm.get('title')!.value;
    console.log(title);
    this.service.searchTask(title).subscribe((res)=>{
      console.log(res);
      this.listOfTask=res;
    })
  }
}
