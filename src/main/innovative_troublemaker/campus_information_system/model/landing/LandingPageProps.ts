export interface Feature {
    title: string;
    description: string;
    icon: string;
}

export interface Testimonial {
    name: string;
    feedback: string;
    position: string;
}

export interface HeroSection {
    title: string;
    subtitle: string;
    cta1: string;
    cta1Url: string;
    cta2: string;
    cta2Url: string;
}

export interface LandingPageProps {
    id?: string;
    hero: HeroSection;
    isHeroShow?: boolean;
    features?: Feature[];
    testimonials: Testimonial[];
    children?: React.ReactNode;
}