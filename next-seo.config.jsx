export const PageSeo = (pageSeo) => {
  const { url, title, description } = pageSeo;

  const seo = {
    title: title,
    description: description,
    canonical: `https:/url.com${url}`,
    defaultOpenGraphImageHeight: 1200,
    defaultOpenGraphImageWidth: 1200,
    openGraph: {
      type: "website",
      locale: "es_PE",
      url: `https:/url.com${url}`,
      title: title,
      description: description,
      site_name: title,
    },
  };
  return seo;
};
