import imageUrlBuilder from '@sanity/image-url';

import sanity from './sanity';

export const sanityUrlFor = (source: string) => {
    const builder = imageUrlBuilder(sanity);
    const urlFor = (source: string) => builder.image(source);
    return urlFor(source);
  }