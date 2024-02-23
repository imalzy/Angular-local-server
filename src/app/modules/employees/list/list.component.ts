import { AfterViewInit, Component, DestroyRef, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { IEmployee } from 'src/app/shared/model/employee.model';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
    MatTooltipModule,
    DatePipe,
    CurrencyPipe,
    RouterModule,
  ],
})
export class ListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'username',
    'email',
    'birthDate',
    'basicSalary',
    'status',
    'group',
    'action',
  ];
  dataSource!: MatTableDataSource<IEmployee>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  private readonly destroyRef = inject(DestroyRef);
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.employeeService.getEmp().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((res) => {
      const emp = res?.data || [];
      console.log(emp);
      this.dataSource = new MatTableDataSource<IEmployee>(emp);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onDelete(item: any) {
    console.log(item);
  }
  onEdit(item: any) {
    console.log(item);
  }

  openDialog(): void {
    this.router.navigateByUrl('/dashboard/employees/create');
  }

  getRecord(val: IEmployee): void {
    this.router.navigateByUrl(`dashboard/employees/detail/${val.id}`);
  }
}
