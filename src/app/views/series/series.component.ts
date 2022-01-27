import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Series} from "../../models/series.model";
import {SeriesService} from "../../services/series/series.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-series',
    templateUrl: './series.component.html',
    styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
    seriesSub: Subscription;
    series: Array<Series>;

    constructor(private seriesService: SeriesService, private router: Router) {
        this.seriesSub = new Subscription();
        this.series = new Array<Series>();
    }

    ngOnInit(): void {
        this.seriesSub = this.seriesService.series.subscribe(series => this.series = series);
    }

    onClickDeleteBtn(id: number) {
        this.seriesService.delete(id).then(() => this.router.navigateByUrl('series'));
    }

    ngOnDestroy(): void {
        this.seriesSub.unsubscribe();
    }
}
