import autoprefixer from "autoprefixer";
import postcssSortMediaQueries from "postcss-sort-media-queries";

export default {
    plugins: [
        autoprefixer(),
        postcssSortMediaQueries({
            sort: "desktop-first",
        }),
    ],
};