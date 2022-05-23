import { Component, OnInit } from '@angular/core';
import { AcademicPeriod } from 'src/app/common/academic-period';
import { AcademicPeriodService } from 'src/app/services/academic-period.service';

@Component({
  selector: 'app-academic-period-list',
  templateUrl: './academic-period-list.component.html',
  styleUrls: ['./academic-period-list.component.css']
})
export class AcademicPeriodListComponent implements OnInit {

  academicPeriods : AcademicPeriod[] = []; 

  constructor(private academicPeriodService: AcademicPeriodService) { }

  ngOnInit(): void {
    this.listAcademicPeriods(); 
  }

  listAcademicPeriods(){
    this.academicPeriodService.getAcademicPeriodList().subscribe(
      data=>{
        this.academicPeriods = data;
      }
    ); 
  }

}
