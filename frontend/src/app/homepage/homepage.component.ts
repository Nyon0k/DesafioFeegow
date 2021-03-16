import { Component, OnInit } from '@angular/core';
import { BacklocalService } from '../services/backlocal.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContentObserver } from '@angular/cdk/observers';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public backlocalService:BacklocalService, public formBuilder:FormBuilder) {
    this.doctorForm = formBuilder.group({
      name: [null, Validators.required],
      birthdate: [null, Validators.required],
      cpf: [null, Validators.required],
      source_id: [null, Validators.required],
      specialty_id: [null],
      professional_id: [null],
      date_time: [null]
    });
    this.showListSources();
    this.getSpecialties();
    console.log(this.doctorForm);
  }

  schedule: Object;
  isSchedulingSelected = false; 
  sourceList: Object = [];
  doctorForm: FormGroup;
  selectedSpecialtyIndex = null;
  doctorsList: any = null;
  selectedDoctor: Object = null;
  specialties: any = [];

  ngOnInit(): void {
  }

  getSpecialties(){
    this.backlocalService.getSpecialties().subscribe(res=>{
      this.specialties = res.content;
    });
  }

  showDoctorsBySpecialty(index){
    this.backlocalService.getProfessionals(this.specialties[index].especialidade_id).subscribe(res=>{
      this.doctorsList = res.content;
      console.log(this.doctorsList);
    });
  }

  scheduling(doctor){
    console.log(doctor);
    this.selectedDoctor = doctor;
    this.isSchedulingSelected = true;
  }

  showListSources(){
    this.backlocalService.getSources().subscribe(res=>{
      this.sourceList = res.content;
    });
  }

  createSchedule(){
    console.log(this.selectedDoctor);
    this.doctorForm.controls['specialty_id'].setValue(this.specialties[this.selectedSpecialtyIndex].especialidade_id);
    this.doctorForm.controls['professional_id'].setValue(this.selectedDoctor.profissional_id);
    console.log(this.doctorForm);
    this.backlocalService.postSchedule(this.doctorForm.value).subscribe(res=>{
      alert('Agendamento conlcuído.');
      console.log(res);
      this.isSchedulingSelected = false;
      this.doctorsList = [];
    });
  }
}
