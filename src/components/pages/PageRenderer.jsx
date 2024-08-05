const PageRenderer = ({ page, category }) => {
  // For now, just display the category and page name
  // Later, you can integrate CKEditor content fetching logic here
  return (
    <div>
      <h1>{page}</h1>
      <h2>Category: {category}</h2>
      <div>
        Content for {page} in {category} will be rendered here.
      </div>
    </div>
  );
};

export default PageRenderer;
