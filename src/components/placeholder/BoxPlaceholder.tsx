import ContentLoader from "react-content-loader";

const BoxPlaceholder = () => (
  <div className="border-t-[1px]  border-black  ">
    <ContentLoader
      viewBox="0 0 800 250"
      height={230}
      width={800}
      backgroundColor="#000000"
      foregroundColor="#ffffff"
    >
      <rect x="25" y="10" rx="0" ry="0" width="420" height="25" />
      <rect x="25" y="10" rx="0" ry="0" width="420" height="25" />

      <rect x="25" y="75" rx="0" ry="0" width="420" height="25" />

      <rect x="25" y="155" rx="0" ry="0" width="420" height="28" />
    </ContentLoader>
  </div>
);

export default BoxPlaceholder;
