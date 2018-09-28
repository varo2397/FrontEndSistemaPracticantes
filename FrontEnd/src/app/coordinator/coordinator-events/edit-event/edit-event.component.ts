import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  formEvent: FormGroup;
  fileName: string;
  selectedFile: File;
  fileFormatValid : boolean = true;
  validFormats: string[] = ['jpg', 'jpeg', 'png' , 'svg'];
  fileIn: boolean = false;
  fileFormat: string;
  error:string;


  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {

    this.formEvent = new FormGroup({
      eventDay : new FormControl(null,[Validators.required]),
      'startEventTime': new FormControl(null, Validators.required),
      'photo': new FormControl(null, Validators.required),
      'endEventTime': new FormControl(null, [Validators.required
        ,this.checkEventEndTime.bind(this)]),
      'eventType': new FormControl(null, Validators.required),
      'activitiesTime': new FormArray([this.constructorCompanies(),this.constructorStartActivityTime(),this.constructorEndActivityTime()])
    });
  }

  checkEventEndTime(control:FormControl){
    if(this.formEvent != undefined){
      const startEventTime = this.formEvent.get('startEventTime').value;
      const endEventTime = control.value;

      if(startEventTime > endEventTime){
        return { 'horaInicioErronea': true };
      }
      return null;
    }
    return null;
  }



  changeInFile(event) {
    //funcion para verificar que se ingreso algo en el campo photo y ademas verificar el tipo de dato
    //del mismo archivo

    this.fileIn = true;
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile.name;
    this.fileFormat = this.fileName.split('.')[1].toLowerCase();
    if( this.validFormats.indexOf(this.fileFormat) === -1 ){
      this.fileFormatValid = false;
      this.formEvent.get('photo').setValue(this.selectedFile);
    }
    else {
      this.fileFormatValid = true;
    }
  }

  constructorStartActivityTime(){
    return new FormControl(null, [Validators.required,
      this.checkActivitiesStartTimeToEventTimes.bind(this),
      this.checkPreviousActivityTimes.bind(this)]);
  }

  constructorEndActivityTime(){
    return new FormControl(null, [Validators.required,
      this.checkPreviousActivityTimes.bind(this),
      this.checkActivitiesEndTimeToEventTimes.bind(this)]);
  }

  constructorCompanies(){
    return new FormControl(null, [Validators.required])
  }


  addInput() {

    const companies = this.constructorCompanies();
    const startTime = this.constructorStartActivityTime();
    const endTime = this.constructorEndActivityTime();


    const control = (<FormArray>this.formEvent.get('activitiesTime')); //castea el array de controles para modificarlo
    control.push(companies);
    control.push(startTime);
    control.push(endTime);
  }

  deleteInput(index : number) {
    const control = (<FormArray>this.formEvent.get('activitiesTime'));

    if(control.length > 3){ //en caso de que haya mas de una entrada para el numero de contacto
      control.removeAt(index);
      control.removeAt(index - 1);
      control.removeAt(index - 2);
    }
  }

  checkActivitiesStartTimeToEventTimes(control:FormControl){

    if(this.formEvent !== undefined){
      let activityIndex = this.getIndex(control);

      if(activityIndex === 0){
        //en caso de que el control sea el primero de la lista tiene que ser minimo la hora de inicio del evento
        const eventStartTime = this.formEvent.get('startEventTime').value;
        const activitiesStartTime = control.value;
        const eventEndTime = this.formEvent.get('endEventTime').value;

        if(eventStartTime > activitiesStartTime){
          return {'horaInicioActividadErronea' : true};
        }
        else if( activitiesStartTime > eventEndTime ){
          return {'horaInicioActividadErroneaFin' : true};
        }
      }
      return null;
    }
    return null;
  }

  checkActivitiesEndTimeToEventTimes(control:FormControl){

    if(this.formEvent !== undefined){
      let activityIndex = this.getIndex(control);
      const lengthArrayControls = (<FormArray>this.formEvent.get('activitiesTime')).length;

      if(activityIndex === lengthArrayControls - 1){
        //en caso de que el control sea el primero de la lista tiene que ser minimo la hora de inicio del evento
        const eventEndTime = this.formEvent.get('endEventTime').value;
        const activitiesEndTime = control.value;
        if(eventEndTime < activitiesEndTime){
          return {'horaFinActividadErronea' : true};
        }
      }
      return null;
    }
    return null;
  }

  checkPreviousActivityTimes(control : FormControl){
    if(this.formEvent !== undefined) {
      let activiyIndex = this.getIndex(control);

      if(activiyIndex > 0){
        //en caso de que no sea el primero elemento ya que sino al acceder al indice anterior da error
        let previousActivityEndTime = (<FormArray>this.formEvent.get('activitiesTime')).at(activiyIndex - 1).value;
        let activityStartTime = control.value;

        if(activityStartTime < previousActivityEndTime){
          return {'actividadAnteriorErronea':true};
        }
        return null;
      }
    }
    return null;
  }

  getIndex(control : FormControl){
    const activities = (<FormArray>this.formEvent.get('activitiesTime'));

    for(let i = 0; i < activities.length ; i++){
      if(activities.at(i) === control){
        return i;
      }
    }
  }


  convertirImagen(archivoSeleccionado : File) {
    //funcion para convertir un archivo a base64
    return new Promise(function (resolve, reject) {
      let reader = new FileReader();
      let archivo;
      reader.onloadend = (e) => {
        archivo = reader.result;
        resolve(archivo);
      };
      reader.readAsDataURL(archivoSeleccionado);
    });
  }

}
