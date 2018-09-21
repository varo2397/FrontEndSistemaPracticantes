import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {

  formPerson: FormGroup;
  generos =  ['Masculino', 'Femenino'];

  constructor() { }

  ngOnInit() {
    this.formPerson = new FormGroup({
      'nombre': new FormControl(null, [Validators.required]),
      'primerApellido': new FormControl(null, [Validators.required]),
      'segundoApellido': new FormControl(null, [Validators.required]),
      'cedula': new FormControl(null, [Validators.required, Validators.max(999999999), Validators.min(100000000)]),
      'genero': new FormControl('Masculino'),
      'numerosContacto': new FormArray([
        this.constructorPhoneNumber()
      ]),
      'correosContacto': new FormArray([
        this.constructorEmail()
      ])
    })

  }

  constructorPhoneNumber(){
    return new FormControl(null, [Validators.required,
      Validators.max(99999999),
      Validators.min(10000000),
      this.searchForDuplicatedPhoneNumbers.bind(this)
    ]);
  }

  constructorEmail() {
    return new FormControl(null, [Validators.required,
      Validators.email,
      this.searchForDuplicatedEmails.bind(this)
    ]);
  }

  addInput(nombreControl : string) {
    const nuevaEntrada = ( nombreControl === 'numerosContacto' ?
      this.constructorPhoneNumber() : this.constructorEmail() ); //se escoge el tipo de control a agregar y se crea

    const control = (<FormArray>this.formPerson.get(nombreControl)); //castea el array de controles para modificarlo
    control.push(nuevaEntrada);
  }

  deleteInput(indice : number, nombreControl : string) {
    const control = (<FormArray>this.formPerson.get(nombreControl));

    if(control.length > 1){ //en caso de que solo haya una entrada para el numero de contacto
      control.removeAt(indice);
    }
  }

  searchDuplicate(arreglo : FormArray, elemento : any ) : boolean {
    //funcion que busca duplicados en el arreglo

    let count = 0; //contador de repetidos
    for( let i = 0; i < arreglo.length; i++){

      if(arreglo.at(i).value === elemento){
        count++;
        if(count >= 2){
          return true;
        }
      }
    }
    return false;
  }

  searchForDuplicatedPhoneNumbers(control : FormControl) {
    if(this.formPerson !== undefined){
      const arreglo = (<FormArray>this.formPerson.get('numerosContacto'));
      if(arreglo.length > 1){
        const valor = control.value;

        const duplicado = this.searchDuplicate(arreglo, valor );
        if(duplicado){

          return { 'numeroRepetido': true };
        }
        return null;
      }

    }
    return null;
  }


  searchForDuplicatedEmails(control : FormControl) {
    if(this.formPerson !== undefined){
      const arreglo = (<FormArray>this.formPerson.get('correosContacto'));
      if(arreglo.length > 1){
        const valor = control.value;

        const duplicado = this.searchDuplicate(arreglo, valor );
        if(duplicado){
          return { 'correoRepetido': true };
        }
        return null;
      }

    }
    return null;
  }

}
