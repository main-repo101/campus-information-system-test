export interface CardAction {
    label: string;
    url: string;
}

export interface CardData {
    title: string;
    description: string;
    image: string;
    actions: CardAction[];
}

export interface CardProps {
    data: CardData;
}