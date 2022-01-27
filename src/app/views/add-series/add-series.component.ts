import {Component, OnInit} from '@angular/core';
import {SeriesService} from "../../services/series/series.service";
import {Router} from "@angular/router";
import {Series} from "../../models/series.model";

@Component({
    selector: 'app-add-series',
    templateUrl: './add-series.component.html',
    styleUrls: ['./add-series.component.css']
})
export class AddSeriesComponent implements OnInit {

    constructor(private seriesService: SeriesService, private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmitAddOffer(item: Series): void {
        this.seriesService.save(item).then(() => {
            this.router.navigateByUrl('series');
        });
    }
}
