import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
    return {
        name: "dude"
    };
}) satisfies PageLoad;