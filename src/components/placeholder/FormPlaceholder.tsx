import ContentLoader from "react-content-loader";

const FormPlaceHolder = () => (
  <div className="border-t-[1px] border-b-[1px] border-black py-2">
    <ContentLoader
      speed={1}
      width={910}
      height={40}
      viewBox="0 0 910 40"
      backgroundColor="#000000"
      foregroundColor="#ffffff"
    >
      <rect x="0" y="0" rx="0" ry="0" width="210" height="40" />
    </ContentLoader>
  </div>
);

export default FormPlaceHolder;
