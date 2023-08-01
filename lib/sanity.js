import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-08-01',
    useCdn: true,
    token: process.env.SANITY_PROJECT_TOKEN
})

const builder = imageUrlBuilder(client)

const urlFor = (source) => builder.image(source)

export {
    client, urlFor
};
