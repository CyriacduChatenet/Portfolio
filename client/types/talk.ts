type SocialNetwork = {
    name: string;
    url: string;
    icon: string;
};

type User = {
    name: string;
    profile_picture: string;
    socialNetworks: SocialNetwork[];
};

export default interface ITalk {
    _id?: string;
    event_title: string;
    title: string;
    video_link: string;
    description: string;
    team: User[];
    socialNetworks: SocialNetwork[];
};