/* Default SEO - All Pages */
/* Each Page has its own personalized SEO at the Head Component */
export default {
  openGraph: {
    type: "website",
    titleTemplate: "Next SEO | %s",
    images: [
      {
        url: "https://president-of-the-world.cyrilo.app/images/banner.svg",
        width: 1200,
        height: 630,
        alt: "Cyrilo Logo",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};
