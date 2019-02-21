import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  input: any

  @ContentChild(NgModel) model: NgModel

  @Input() label: string
  //Mensagem default caso não seja passada nem uma mensagem 
  @Input() errorMessage: string = "Campo obrigatório!"

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model
    if(this.input === undefined){
      throw new Error('Este componente precisa ser usado com uma diretiva ngModel')
    }
  }

  hasSuccess(): boolean{
    return this.input.valid && (this.input.dirt || this.input.touched)
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.dirt || this.input.touched)
  }

}
