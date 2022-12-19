import { model, Schema } from "mongoose";

import ITalk from "@/types/talk";


const talkSchema = new Schema<ITalk>({
    event_title: String,
    title: String,
    video_link: String,
    description: String,
    team: [
        {
            name: String,
            profile_picture: String,
            socialNetworks: [
                {
                    name: String,
                    url: String,
                    icon: String,
                },
            ],
        },
    ],
    socialNetworks: [
        {
            name: String,
            url: String,
            icon: String,
        },
    ],
});

const Talk = model<ITalk>('Talk', talkSchema);

export default Talk;