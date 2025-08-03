import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
export type Task={
  
  name:string,
  done:boolean
}

 
@Component({
  selector: 'app-homepage',
  imports: [],
  standalone:true,
  template: `
    <input  #searchinput class="border-b border-b-red-500"/>
    <button (click)="addtask(searchinput.value)" searchinput.value="" >Add task</button>
    <ul>
      <!--"Toogletasks(tasks[1])"=(click) as second way-->
    <li ><button (click)="tasks[1].done = !tasks[1].done"  class="{{ tasks[1].done ? 'line-through':''}}">"{{ tasks[1].name }}"</button></li>
    </ul>
  `,
  styles: ``
})

export class Homepage {
[x: string]: any; 
  
tasks=[
  {
    name: "Firsttasks",
    done: false,
  },
  {
    name:"Secondtask",
    done: true,
  }
]
 @Input() task: Task[]=[];




Toogletasks(task: Task){
task.done=!task.done

}
 
addtask(task:Task){
  this.tasks.push()
{
  task.name
}

}

}


