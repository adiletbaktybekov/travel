export interface ITravelState {
    travel: ITravel[]
    travel_details: ITravelDetails
    travel_faq: ITravelFAQ[]
}

export interface ITravel {
    id: number
    category: number,
    concept_for_travel_ky: string,
    concept_for_travel_ru: string,
    created: string,
    description_ky: string,
    description_ru: string,
    duration: string,
    end_date: string,
    image: any,
    mentor: number,
    seats: number
    sold_out: boolean | null
    start_date: string
    subtitle_ky: string,
    subtitle_ru: string,
    title_ky: string,
    title_ru: string,
    new: boolean | null

}

export interface ITravelDetails {
    id: number,
    category: {
        title_ky: string,
        title_ru: string,
    }
    mentor: {
        full_name: string,
        short_bio_ru: string,
        short_bio_ky: string
        bio_ru: string,
        bio_ky: string,
        image: any
    },
    days: {
        title_ru: string,
        title_ky: string,
        body_ru: string,
        body_ky: string,
        start_date: string,
        day: string,
        id:number,
        map(element: (el: any) => JSX.Element): any;
    },
    peculiarities: {
        title_ru: string,
        title_ky: string,
        description_ru: string,
        description_ky: string,
        image: any,
        id:any|number,
        map(element: (el: any) => JSX.Element): string | any;
    },
    image2: any,
    image3: any,
    video: any | string,
    subtitle_ru: string,
    subtitle_ky: string,
    seats_left: string,
    reviews:{
        text:string,
        video:any,
        map(element: (el: any) => JSX.Element): any;
    },
    body_ru: string,
    body_ky: string,
    text: string,
    concept_for_travel_ky: string,
    concept_for_travel_ru: string,
    created: string,
    description_ky: string,
    description_ru: string,
    duration: string,
    end_date: string,
    image: any,
    seats: number | string
    sold_out: boolean | null
    start_date: string
    title_ru: number,
    new: boolean | null
    title_ky: string,
}

export interface ITravelFAQ {
    question: string,
    answer: string,
    id: number
}