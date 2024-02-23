import { CurrencyPipe, DatePipe, NgForOf } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { IEmployee } from 'src/app/shared/model/employee.model';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  standalone: true,
  imports: [RouterModule, MatCardModule, NgForOf, DatePipe, CurrencyPipe, MatButtonModule],
})
export class DetailComponent implements OnInit {
  employee!: IEmployee;
  private readonly destroyRef = inject(DestroyRef);

  constructor(
    private employeeService: EmployeeService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id') as string;
    this.employeeService.getEmpById(id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((resp) => {
      this.employee = resp.data as IEmployee;
      console.log(this.employee); // Print the parameter to the console.
    });
  }

  onBack(): void {
    this.router.navigate(['/dashboard/employees']);
  }
}
