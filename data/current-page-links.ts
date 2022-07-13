// Internal Links - Links that lead to the same page
export const currentPageLinks: CurrentPageLinks = {
  homePage: {
    rankingSection: "ranking-section",
  },
};

// Internal Links for HomePage
interface HomePageLinks {
  rankingSection: string;
}

// Internal Links for All Pages
interface CurrentPageLinks {
  homePage: HomePageLinks;
}
