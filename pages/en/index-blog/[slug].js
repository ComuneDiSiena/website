import * as queries from "lib/queries";
import fetchData from "lib/dato";

import { default as Article } from "pages/articoli/[slug].js";

export async function getStaticPaths() {
  const response = await fetchData(queries.getAllSlugsNews, { locale: "en" });
  const paths = response.allNews.map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale = "en", preview }) {
  const { slug } = params;
  const response = await fetchData(queries.getNews, { slug, locale }, preview);
  const site = await fetchData(queries.site, { locale });
  return {
    props: {
      locale,
      page: response.news,
      site,
    },
  };
}

export default Article;
