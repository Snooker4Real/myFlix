import {Comment} from './comment.model'


export class Series {
    private static _sId: number = 0;
    private _id: number;
    private _name: string;
    private _dateFirstSeason: Date;
    private _seasonCount: number;
    private _description: string;
    private _review: string;
    private _imageUrl: string;
    private _comments: Array<Comment>;

    constructor(name: string, dateSeasonStart: Date, seasonCount: number, description: string, review: string, imageUrl: string, comments: Array<Comment>) {
        this._id = Series._sId++;
        this._name = name;
        this._dateFirstSeason = dateSeasonStart;
        this._seasonCount = seasonCount;
        this._description = description;
        this._review = review;
        this._imageUrl = imageUrl;
        this._comments = comments;
    }

    static get sId(): number {
        return this._sId;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get dateFirstSeason(): Date {
        return this._dateFirstSeason;
    }

    set dateFirstSeason(value: Date) {
        this._dateFirstSeason = value;
    }

    get seasonCount(): number {
        return this._seasonCount;
    }

    set seasonCount(value: number) {
        this._seasonCount = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get review(): string {
        return this._review;
    }

    set review(value: string) {
        this._review = value;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    set imageUrl(value: string) {
        this._imageUrl = value;
    }

    get comments(): Array<Comment> {
        return this._comments;
    }

    set comments(value: Array<Comment>) {
        this._comments = value;
    }
}
