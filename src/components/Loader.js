import { Blocks } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="center">
      <Blocks
        visible={true}
        height="200"
        width="200"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};

export default Loader;
