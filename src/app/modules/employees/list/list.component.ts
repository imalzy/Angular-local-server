import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { IEmployee } from 'src/app/shared/model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'username',
    'email',
    'birthDate',
    'basicSalary',
    'status',
    'group',
  ];
  dataSource!: MatTableDataSource<IEmployee>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.employeeService.getEmp().subscribe((res) => {
      const emp = res?.data || [];
      this.dataSource = new MatTableDataSource<IEmployee>(emp);
      this.dataSource.paginator = this.paginator;
    });
  }
}
