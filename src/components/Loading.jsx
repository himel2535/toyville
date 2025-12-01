import { FallingLines } from "react-loader-spinner";

const Loading = ({ size = 100, color = "#000000" }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <FallingLines
        color={color}
        width={size}
        visible={true}
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loading;
