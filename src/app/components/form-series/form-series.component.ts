import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Series} from "../../models/series.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-form-series',
    templateUrl: './form-series.component.html',
    styleUrls: ['./form-series.component.css']
})
export class FormSeriesComponent implements OnInit {
    @Input() itemToEdit: Series | undefined;
    @Output() formSubmitted: EventEmitter<Series>;
    form: FormGroup;
    item: Series;
    @Input() submitLabel: string;

    constructor() {
        this.item = new Series('', new Date(), 0, '', '', '', []);
        this.form = new FormGroup({});
        this.formSubmitted = new EventEmitter<Series>();
        this.submitLabel = "AJOUTER +";
    }

    ngOnInit(): void {
        if (this.itemToEdit) {
            this.item = this.itemToEdit;
        }

        this.initForm()
    }

    onSubmitForm(): void {
        if (this.form.valid) {
            this.formSubmitted.emit(this.item);
        }

    }

    private initForm() {

        this.form.addControl('name',
            new FormControl(
                null,
                [
                    Validators.required,
                ]
            ));
        this.form.addControl('description',
            new FormControl(
                null,
                [
                    Validators.required,
                ]
            ));

        this.form.addControl('review',
            new FormControl(
                null,
                [
                    Validators.required,
                ]
            ));

        this.form.addControl('dateFirstSeason',
            new FormControl(
                null,
                [
                    Validators.required,
                ]
            ));

        this.form.addControl('seasonsCount',
            new FormControl(
                null,
                [
                    Validators.required,
                ]
            ));

        this.form.addControl('imageUrl',
            new FormControl(
                null,
                [
                    Validators.required,
                ]
            ));
    }
}
