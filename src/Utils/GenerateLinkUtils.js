export const generateLinks = (categories, filterCategories) =>
  categories
    .filter((category) => filterCategories.includes(category.category))
    .flatMap((category) =>
      category.pages.map((page) => ({
        label: page,
        link: `/${category.category
          .toLowerCase()
          .replace(/ & /g, "-")
          .replace(/ /g, "-")}/${page.toLowerCase().replace(/ /g, "-")}`,
      }))
    );
