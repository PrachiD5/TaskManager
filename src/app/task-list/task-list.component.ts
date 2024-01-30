import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{
  constructor(private taskSer:TaskServiceService, private rou:Router){}

  searchData: any;
  allData: any;

  ngOnInit(): void {
   this.allDetails()
  }
  allDetails(){
    this.taskSer.getTasks().subscribe((data)=>{
      console.log(data);
      this.allData=data;
    })
  }
  onDel(id:any){
    this.taskSer.deleteTask(id).subscribe(()=>{
      alert("Task Deleted Successfully!!");
      this.allDetails();
    })
  }
  
  onEdit(id:any){
  this.rou.navigate(['/edit',id]);
  }
}
