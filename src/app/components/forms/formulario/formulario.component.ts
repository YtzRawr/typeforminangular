import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  // campos del formulario 
  loginForm: FormGroup = new FormGroup({});
  // inyectamos la clase formbuilder
  constructor(private formBuilder: FormBuilder){
  }

  ngOnInit(): void {
    // iniciamos los campos del formulario y su valores correspondientes
    this.loginForm = this.formBuilder.group({
      name: '',
      email: '',
      password: ''

      }
    );

    // Nos subscribimos a los cambios que ocurran en el form y se mostraran por consola
    this.loginForm.valueChanges.subscribe(
      console.log
    )
    
  }

}
