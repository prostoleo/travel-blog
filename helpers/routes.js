import StoryblokClient from 'storyblok-js-client';

// todo для генерации динамических путей для SSG
// https://medium.com/js-dojo/how-i-generated-dynamic-routes-for-different-nuxt-js-pages-ce2ee6972743

export const dynamicRoutes = async () => {
  const Storyblok = new StoryblokClient({
    accessToken: process.env.STORYBLOK_KEY,
    // accessToken: key,
    // accessToken: STORYBLOK_KEY,
  });

  const resForPosts = await Storyblok.get(`cdn/stories`, {
    // version: 'draft',
    version: 'published',
    starts_with: 'posts/',
    resolve_relations: 'Post.direction_info',
  }).then((res) => res.data);

  const resForDirections = await Storyblok.get(`cdn/stories`, {
    // version: 'draft',
    version: 'published',
    starts_with: 'directions/',
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

// const test = dynamicRoutes();
// console.log('test: ', test);
