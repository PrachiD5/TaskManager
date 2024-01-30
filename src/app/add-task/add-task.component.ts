import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{
  constructor(private taskSer:TaskServiceService, private rou:Router ){}

  ngOnInit(): void {
  
  }
  
  minDate="2024-01-31"

  addData=new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl(''),
    dueDate:new FormControl('',[Validators.required]),
    status:new FormControl(''),
  })
  
  onAdd()
  {
    this.taskSer.addTask(this.addData.value).subscribe((infos)=>{
      alert("New Task Added Successfully!!");
      console.log(infos);
      this.rou.navigate(['/'])
    })
  }
  
 
}
