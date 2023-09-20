import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, NgForm } from '@angular/forms';

describe('AppComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [RouterTestingModule, FormsModule],
        declarations: [AppComponent]
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have todos list empty`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        console.log(app.todos);
        expect(app.todos).toEqual([]);
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.title')?.textContent).toContain('Angular Todo List App');
    });

    it('adding to checklist', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        let size = app.todos.length;
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        compiled.querySelector('#title')?.setAttribute('value', "New item");
        let form: NgForm;
        form = compiled.querySelector('.todo-form');
        form.ngSubmit();
        expect(app.todos.length).toEqual(size + 1);

        expect(compiled.querySelector('.title')?.textContent).toContain('Angular Todo List App');
    });
});
