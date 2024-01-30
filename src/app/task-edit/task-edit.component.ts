import { Component } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent {
  constructor(private taskSer:TaskServiceService, private acr:ActivatedRoute, private rou:Router){}
  
  minDate="2024-01-31";
  urlid:any;
  searchData:any;
  
  ngOnInit(): void {
    this.acr.params.subscribe((data)=>{
      this.urlid=data['id'];
    })
  
    this.taskSer.searchTask(this.urlid).subscribe((mydata)=>{
      this.searchData=mydata;
  
      this.addData=new FormGroup({
        title:new FormControl(this.searchData.title),
        description:new FormControl(this.searchData.description),
        dueDate:new FormControl(this.searchData.dueDate),
        status:new FormControl(this.searchData.status)
      })
    })
  
  }
  
  addData=new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl(''),
    dueDate:new FormControl('',[Validators.required]),
    status:new FormControl('')
  })
  
   onUpdate(){
    this.taskSer.updateTask(this.urlid, this.addData.value).subscribe((info)=>{
      alert("Task Updated!!!");
      console.log(info);
      this.rou.navigate(['/']);
    })
   }
}
