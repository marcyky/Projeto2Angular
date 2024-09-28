import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() tarefa!:Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();
  @Output() onToggleConcluido = new EventEmitter<Tarefa>();


  onDelete(tarefa: Tarefa){
    this.onDeleteTask.emit(tarefa);
  }

  onToggle(tarefa: Tarefa){
    this.onToggleConcluido.emit(tarefa);
  }
}
