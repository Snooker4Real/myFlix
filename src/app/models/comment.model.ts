export class Comment {
    private static _sId: number = 0;
    private _id: number;
    private _date: Date;
    private _author: string;
    private _content: string;

    constructor(author: string, content: string) {
        this._id = Comment._sId++;
        this._date = new Date();
        this._author = author;
        this._content = content;
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

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }
}
