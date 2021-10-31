export default async function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }

  // eslint-disable-next-line require-await
  const findEl = async (hash, x) => {
    return (
      document.querySelector(`.${hash}`) ||
      // document.getElementById(`${hash}`) ||
      new Promise((resolve, reject) => {
        if (x > 50) {
          return resolve();
        }
        setTimeout(() => {
          resolve(findEl(hash, ++x || 1));
        }, 100);
      })
    );
  };

  if (to.hash) {
    const el = await findEl(to.hash.slice(1));

    if ('scrollBehavior' in document.documentElement.style) {
      return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    } else {
      return window.scrollTo(0, el.offsetTop);
    }
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ x: 0, y: 0, behavior: 'smooth' });
    }, 700);
  });
}
