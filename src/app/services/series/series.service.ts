import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Series} from "../../models/series.model";
import {Comment} from "../../models/comment.model";

@Injectable({
    providedIn: 'root'
})
export class SeriesService {
    series: BehaviorSubject<Array<Series>>;

    constructor() {
        this.series = new BehaviorSubject<Array<Series>>([]);
        this.initSeries();
    }

    private initSeries(): void {
        const series: Array<Series> = [];
        const commentPower: Array<Comment> = [];
        commentPower.push(new Comment('Admin', 'Nice series!'));
        series.push(new Series('Power', new Date('2014-06-08'), 6, 'Nightclub owner James "Ghost" St. Patrick has designs on an empire after the successful launch of his club “Truth.” However, the club and Ghost’s persona hides a terrible secret, the venue is a front for a lucrative drug network that serves only the wealthy and powerful. As Ghost tries to go legit, everything begins to unravel and he is unsure of who he can trust.', "", "https://m.media-amazon.com/images/M/MV5BYjllZjcwNjItMzc1OC00YjRkLWI5YzUtODM1YmEzNjFiYzNhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", commentPower));
        const commentTheWitcher: Array<Comment> = [];
        commentTheWitcher.push(new Comment('Admin', 'Un must watch'));
        series.push(new Series('The Witcher', new Date('2019-12-20'), 2, ' Le sorceleur Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes.', "un classique", "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", commentTheWitcher));
        const commentsAttackOnTitans: Array<Comment> = [];
        commentsAttackOnTitans.push(new Comment('Admin', "Un animé plein d'action"));
        series.push(new Series('Attack on Titans', new Date('2013-07-05'), 4, 'Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les rares survivants de l’humanité n’ont d’autre choix pour survivre que de se barricader dans une cité-forteresse. Les humains n’ont pas aperçu de titans aux abords de leur ville depuis plus de cent ans. Eren, le héros de ce manga, et sa sœur adoptive Mikasa vont pourtant être témoins de la mort de leur mère lorsque qu’un titan encore plus grand que les précédents apparaît pour détruire le mur, le Titan colossal. Eren décide alors de prendre sa revanche et de tuer tous les titans en entrant dans l’escouade d’exploration, la section d’élite des soldats de l’humanité.', "Très bonne animé", "https://m.media-amazon.com/images/M/MV5BNDE5ZjMwNGEtYzMwMC00NzEwLTg3MWUtMmJmYTUyNDBjOGFiXkEyXkFqcGdeQXVyMTE3ODM0NzI1._V1_.jpg", commentsAttackOnTitans));
        this.series.next(series);
    }

    getSeriesItemById(id: number): Promise<Series> {
        // Caching solution
        return new Promise<Series>(
            (res, rej) => {
                const series = this.series.getValue();
                console.log(series);
                for (const item of series) {
                    if (item.id === id) {
                        res(item);
                        break;
                    }
                }
            }
        );
    }

    addComment(id: number, comment: Comment): Promise<void> {
        return new Promise<void>(
            (res, rej) => {
                const series = this.series.getValue();
                console.log(series);
                console.log(id);
                for (const item of series) {
                    if (item.id === id) {
                        item.comments.push(comment);
                        res();
                        break;
                    }
                }
            }
        );
    }

    save(item: Series) {
        return new Promise<void>((res) => {
            const series = this.series.getValue();
            series.push(item);
            this.series.next(series);
            res();
        })
    }

    delete(id: number): Promise<void> {
        return new Promise<void>((res) => {
            const series = this.series.getValue();
            for (const [index, item] of series.entries()) {
                if (item.id === id) {
                    series.splice(index, 1);
                    this.series.next(series);
                    res();
                    break;
                }
            }
        })
    }

    update(itemEdited: Series): Promise<void> {
        return new Promise<void>((res) => {
            const series = this.series.getValue();
            for (const [index, item] of series.entries()) {
                if (item.id === itemEdited.id) {
                    series[index] = itemEdited;
                    this.series.next(series);
                    res();
                    break;
                }
            }
        })
    }
}
