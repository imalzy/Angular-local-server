import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { generateString } from 'src/app/shared/utils/helper';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: true,
  providers: [provideNgxMask()],
  imports: [
    NgxMaskDirective,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class CreateComponent {
  formGroup: FormGroup = new FormGroup({});
  constructor(private employeeService: EmployeeService, private router: Router) {
    this.formGroup = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      birthDate: new FormControl(''),
      basicSalary: new FormControl(''),
      status: new FormControl(''),
      group: new FormControl(''),
      description: new FormControl(''),
    });
  }

  onSave(): void {
    const uuid = generateString(10);
    const body = { ...this.formGroup.value, id: uuid };
    console.log(body);

    this.employeeService.add(body).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/dashboard/employees'], {
        replaceUrl: true
      })
    });
  }
}
