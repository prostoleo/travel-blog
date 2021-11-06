import StoryblokClient from 'storyblok-js-client';

// import { STORYBLOK_KEY } from '~/config/config.js';

// todo для генерации динамических путей для SSG
// https://medium.com/js-dojo/how-i-generated-dynamic-routes-for-different-nuxt-js-pages-ce2ee6972743

export const dynamicRoutes = async () => {
  const Storyblok = new StoryblokClient({
    accessToken: process.env.STORYBLOK_KEY,
  });

  const resForPosts = await Storyblok.get(`cdn/stories`, {
    version: 'draft',
    starts_with: 'posts',
  }).then((res) => res.data);

  const resForDirections = await Storyblok.get(`cdn/stories`, {
    version: 'draft',
    starts_with: 'directions',
  }).then((res) => res.data);

  const routesForPosts = resForPosts.stories.map((story) => {
    return {
      route: `/${story.full_slug}`,
      payload: story,
    };
  });

  const routesForDirections = resForDirections.stories.map((story) => {
    return {
      route: `/${story.full_slug}`,
      payload: story,
    };
  });

  const routes = [...routesForDirections, ...routesForPosts];

  return routes;
};