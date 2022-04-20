import { Component, OnDestroy, OnInit } from '@angular/core';
import { RegisterFormGroup } from '../../shared/form/register.form-group';
import { AuthManagementService } from '../../shared/services/auth-management.service';
import { Subject, take, takeUntil } from 'rxjs';
import { SnackBarService } from '../../../shared/services/snack-bar.service';
import { JwtResponseModel } from '../../shared/model/jwt-respone.model';
import { AuthInfoService } from '../../../shared/services/auth-info.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  public registerFormGroup: RegisterFormGroup = new RegisterFormGroup();
  private unsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private authManagerService: AuthManagementService,
    private snackBar: SnackBarService,
    private authInfoService: AuthInfoService) {
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public registerUser(): void {
    if (this.registerFormGroup.invalid) {
      this.registerFormGroup.markAllAsTouched();
      this.snackBar.openSnackBar('Заполните обязательные поля');
      return;
    }
    this.authManagerService.register(this.registerFormGroup.value)
      .pipe(take(1), takeUntil(this.unsubscribe))
      .subscribe((data: JwtResponseModel) => {
        this.authInfoService.setJwtInfo(data);
      }, (error: any) => {
        this.snackBar.openSnackBarArr(error.error.errors);
      });
  }
}
