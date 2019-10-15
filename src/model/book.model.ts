export interface Book {
    author?: string;
    id?: string;
    images?: string;
    intro?: string;
    like?: string;
    name?: string;
    ratings?: number;
    serialize?: '连载' | '完本';
    type?: '玄幻';
    wordcount?: number;
}

export const BookTypeOption = [
    {name: '玄幻', code: 1},
    {name: '修真', code: 2},
    {name: '都市', code: 3},
    {name: '历史', code: 4},
    {name: '游戏', code: 5},
];

export type BookType = '玄幻' | '修真' | '都市' | '历史' | '游戏';

export enum BookTypeEnum {
    玄幻 = 1,
    修真 = 2,
    都市 = 3,
    历史 = 4,
    游戏 = 5,
}
