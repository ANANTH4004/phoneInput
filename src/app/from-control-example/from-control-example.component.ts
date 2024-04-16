import {FocusMonitor} from '@angular/cdk/a11y';
import {BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Self,
  ViewChild,
  forwardRef,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import {Subject} from 'rxjs';
import {MatIconModule} from '@angular/material/icon';
import { MyTel, TelInputComponent } from '../tel-input/tel-input.component';

@Component({
  selector: 'app-from-control-example',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    forwardRef(() => TelInputComponent),
    MatIconModule,
  ],
  templateUrl: './from-control-example.component.html',
  styleUrls: ['./from-control-example.component.scss']
})
export class FromControlExampleComponent {
  form: FormGroup = new FormGroup({
    tel: new FormControl(new MyTel('', '', '')),
  });
}
