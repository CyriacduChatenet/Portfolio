interface Image {
    source: string;
};

interface User {
    name: string;
    role: string;
    profile_picture: string;
    webiste: string;
    socialNetwork: SocialNetwork[];
};

interface SocialNetwork {
    name: string;
    logo: string;
    link: string;
};

interface Mission {
    name: string;
    description: string;
}

interface IProject {
    _id?: string;
    title: string;
    link_title: string;
    thumbnail: string;
    category: string;
    about: string;
    images: Image[];
    team: User[];
    missions: Mission[];
}

export default IProject;