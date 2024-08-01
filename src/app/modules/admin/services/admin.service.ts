import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';


const BASE_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
   return this.http.get(BASE_URL+"api/admin/users",{
      headers:this.createAuthorizationHeader()
    });
  }


  postTask(taskDto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/admin/task",taskDto,{
       headers:this.createAuthorizationHeader()
     });
   }


   getAllTask():Observable<any>{
    return this.http.get(BASE_URL+"api/admin/tasks",{
       headers:this.createAuthorizationHeader()
     });
   }

   deleteTask(id:number):Observable<any>{
    return this.http.delete(BASE_URL+"api/admin/task/" + id,{
       headers:this.createAuthorizationHeader()
     });
   }

   
   getTaskById(id:number):Observable<any>{
    return this.http.get(BASE_URL+"api/admin/task/" + id,{
       headers:this.createAuthorizationHeader()
     });
   }

   updateTask(id:number,taskDto:any):Observable<any>{
    return this.http.put(BASE_URL+`api/admin/task/${id}`,taskDto,{
       headers:this.createAuthorizationHeader()
     });
   }

   searchTask(title:string):Observable<any>{
    return this.http.get(BASE_URL+`api/admin/tasks/search/${title}`,{
       headers:this.createAuthorizationHeader()
     })
   }

    
   createComment(id:number,content:string):Observable<any>{

    const params={
      content: content
    }
    return this.http.post(BASE_URL+"api/admin/task/comment/" + id,null, {
      params:params,
       headers:this.createAuthorizationHeader()
     });
   }

   getCommentsByTask(id:number):Observable<any>{
    return this.http.get(BASE_URL+"api/admin/comments/" + id,{
       headers:this.createAuthorizationHeader()
     });
   }

  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer '+ StorageService.getToken()
    )
  }
}