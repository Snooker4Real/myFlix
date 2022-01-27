import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Comment} from '../../models/comment.model';


@Component({
    selector: 'app-form-comment',
    templateUrl: './form-comment.component.html',
    styleUrls: ['./form-comment.component.css']
})
export class FormCommentComponent implements OnInit {
    @Output() formSubmitted: EventEmitter<Comment>;
    form: FormGroup;
    comment: Comment;

    constructor() {
        this.form = new FormGroup({});
        this.formSubmitted = new EventEmitter<Comment>();
        this.comment = new Comment('Administrateur', '');
    }

    ngOnInit(): void {
        this.initForm();
    }

    private initForm() {
        this.form.addControl('content',
            new FormControl(
                null,
                [
                    Validators.required,
                ]
            ));
    }

    onSubmitForm() {
        if (this.form.valid) {
            this.formSubmitted.emit(this.comment);
        }
    }
}
