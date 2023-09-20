import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [AppComponent],
    })
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have todos list empty`, () => {
    console.log(component.todos);
    expect(component.todos).toEqual([]);
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('Angular Todo List App');
  });

  it('check form submit', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const fnOnSubmit = spyOn(component, 'onSubmit');

    const formElement = fixture.nativeElement.querySelector('form');
    // console.log(formElement)
    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();



    // Form input field title - add a text - 'test'
    // Form submit -
    // todos.length == 1
    // document.

    expect(fnOnSubmit).toHaveBeenCalled();
    console.log(component.todos)
    expect(component.todos.length).toBeGreaterThan(0);

  });

});
