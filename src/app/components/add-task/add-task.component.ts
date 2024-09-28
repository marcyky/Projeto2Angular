import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Tarefa } from '../../../Tarefa';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';


@Component({
  selector: 'app-add-task',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, ButtonComponent, CommonModule, MatInputModule, MatDatepickerModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Tarefa>();

  tarefa: string = '';
  data: string = '';
  concluido: boolean = false;
  mostrarAddTarefa: boolean = false;


  AlteraVisualizacao(valor: boolean){
    this.mostrarAddTarefa = valor;
  }

  onSubmit(){
    if(!this.tarefa) {
      alert('Adicione uma tarefa!')
      return;
    }

    const novaTarefa = {
      tarefa: this.tarefa,
      data: this.data,
      concluido: this.concluido
    }

    this.onAddTask.emit(novaTarefa);

    this.tarefa = '';
    this.data = '';
    this.concluido = false;

  }
}
