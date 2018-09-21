import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  fileName: string;
  selectedFile: File;
  fileFormatValid : boolean = true;
  validFormats: string[] = ['jpg', 'jpeg', 'png' , 'svg'];
  formStudent: FormGroup;
  fileIn: boolean = false;

  // universidades: Observable<Object>;
  // sedes: Observable<Object>;
  // carreras: Observable<Object>;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.obtenerUniversidades();


    this.formStudent = new FormGroup({
      'numeroCarne': new FormControl(null, [Validators.min(10000000),
        Validators.max(9999999999),
        Validators.required]),
      'foto': new FormControl(null),
      'universidad': new FormControl(null),
      'sede': new FormControl(null),
      'carrera' : new FormControl(null)
    });
  }

  changeInFile(event) {
    //funcion para verificar que se ingreso algo en el campo foto y ademas verificar el tipo de dato
    //del mismo archivo

    this.fileIn = true;
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile.name;
    let fileFormat = this.fileName.split('.')[1].toLowerCase();
    if( this.validFormats.indexOf(fileFormat) === -1 ){
      this.fileFormatValid = false;
      this.formStudent.get('foto').setValue(this.selectedFile);
    }
    else {
      this.fileFormatValid = true;
    }
  }

  // obtenerUniversidades() {
  //   this.universidades = this.http.get('http://localhost:3000/estudiante/universidades');
  // }
  //
  // obtenerSedes(){
  //   let idUniversidad = this.formStudent.get('universidad').value;
  //   this.sedes = this.http.post('http://localhost:3000/estudiante/sedes',{idUniversidad: idUniversidad});
  // }
  //
  // obtenerCarreras(){
  //   let idSede = this.formStudent.get('sede').value;
  //   this.carreras = this.http.post('http://localhost:3000/estudiante/carreras',{idSede: idSede});
  // }
}
