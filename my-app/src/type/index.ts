export type CardsHomeType = {
    total: string,
    page: string,
    books: ItemsType[]
}
export type ItemsType = {
    title: string,
    subtitle: string,
    isbn13: string,
    price:string,
    image: string,
    url: string,
    id?:string,
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
export type PayloadType = {
    background: string,
    color: string
}

export type StateType = {
    background?: string,
    color?: string,
}

export type ActionThemeType = {
    type?: string,
    theme?: PayloadType
}