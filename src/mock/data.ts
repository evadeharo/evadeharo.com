export type ShuffleCardType =  { 
    id: string,
    title: string,
    subtitle: string,
}

export type MockedDataTypes = {
    title: string,
    subtitle: string,
    contact: string,
    contactHref: string,
    items: ShuffleCardType[],
    jokeText: Record<string, string>
}

export const mockedData: MockedDataTypes = {
    title: "Eva De Haro",
    subtitle: "Creative person who does not like to define herself in one word",
    contact: "evadeharomunoz@gmail.com",
    contactHref: "mailto:evadeharomunoz@gmail.com",
    jokeText: {
        label: "Stop it, I want to read 😡",
        text: "Ja, ja, ja. Nope. if you want information, earn it or write me an email and you'll be done sooner. 😉",
    },
    items: [
    
        {
            id: "card-01",
            title: "My creativity is dead",
            subtitle: "But I'm non-stop trying to learn how to express myself the way I want to, without dying in the process",
        },
        {
            id: "card-02",
            title: "My free time == My dog",
            subtitle: "If you want to find me after my work hours, it's very possible that I'm walking with my dog",
        },
        {
            id: "card-03",
            title: "I sky, I swim, I run",
            subtitle: "I decompress my anxiety through sports, I can be considered a 'gymbro'",
        },
        {
            id: "card-04",
            title: "The more movement, the better",
            subtitle: "'Less is more' is not my way to go",
        },
        {
            id: "card-05",
            title: "Team goes first",
            subtitle: "I have a necessity to constantly meet up with the people who hang around me to know them better",
        },
        {
            id: "card-06",
            title: "I've forgotten the design baselines",
            subtitle: "But since I graduated, I have been reading and learning about composition, color and new trends and tendencies",
        },
        {
            id: "card-07",
            title: "I don't know how to code",
            subtitle: "But I've made this cool website",
        },
    ]
}