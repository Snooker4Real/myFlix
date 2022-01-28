import {Component, OnInit} from '@angular/core';
import {Series} from "../../models/series.model";
import {SeriesService} from "../../services/series/series.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-single-series',
    templateUrl: './single-series.component.html',
    styleUrls: ['./single-series.component.css']
})
export class SingleSeriesComponent implements OnInit {
    item: Series | undefined;

    constructor(private seriesService: SeriesService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        const id = Number.parseInt(this.route.snapshot.params.id);
        this.seriesService.getSeriesItemById(id).then((item: Series) => this.item = item);
    }

}
