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
    component.title = "Rajkumar";
    const formElement = fixture.nativeElement.querySelector('#button1');
    formElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos[0].title).toEqual("Rajkumar");
  });
});
