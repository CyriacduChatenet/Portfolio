interface Image {
    source: string;
};

export interface User {
    name: string;
    role: string;
    profile_picture: string;
    website: string;
    socialNetwork: SocialNetwork[];
    _id: string;
};

interface SocialNetwork {
    name: string;
    logo: string;
    link: string;
};

export interface Mission {
    name: string;
    description: string;
    _id: string;
}

interface IProject {
    _id?: string;
    title: string;
    year: number;
    website_url: string;
    link_title: string;
    thumbnail: string;
    category: string;
    about: string;
    images: Image[];
    team: User[];
    missions: Mission[];
}

export interface IImage {
    source: string;
    _id: string;
}

export default IProject;