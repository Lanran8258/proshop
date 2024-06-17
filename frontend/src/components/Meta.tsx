import { Helmet } from "react-helmet-async";

const Meta = (data: Metadata) => {
  return (
    <Helmet>
      <title>{data.title}</title>
      <meta
        name="description"
        content={data.description}
      />
      <meta
        name="keyword"
        content={data.keywords}
      />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To ProShop",
  description: "We sell the best products for cheap",
  keywords: "electronics, buy electronics, cheap electroincs",
};
export interface Metadata {
  title: string;
  description: string;
  keywords: string;
}
export default Meta;
