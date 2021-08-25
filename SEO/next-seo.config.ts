import { DefaultSeoProps } from "next-seo";

/* Default SEO - All Pages */
/* Each Page has its own personalized SEO at the Head Component */

const DefaultSEO: DefaultSeoProps = {
  openGraph: {
    type: "website",
    images: [
      {
        url: "https://president-of-the-world.cyrilo.app/images/banner.png",
        width: 1200,
        height: 630,
        alt: "President of the World Logo",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
};

export default DefaultSEO;
