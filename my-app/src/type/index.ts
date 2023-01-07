export type CardsHomeType = {
    total: number,
    page: number,
    books: ItemsType[]
}
export type ItemsType = {
    "title": string,
    "subtitle": string,
    "isbn13": string,
    "price":string,
    "image": string,
    "url": string,
}
export type CardType = {
    "error": string
    "title": string
    "subtitle":string
    "authors": string
    "publisher": string
    "isbn10": string
    "isbn13": string
    "pages": string
    "year": string
    "rating": string
    "desc": string
    "price": string
    "image": string
    "url": string
    language: string,

}