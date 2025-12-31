import React from "react";

const OverLay = (props: {
  clicked: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return (
    <div
      className="min-h-screen min-w-screen bg-black opacity-60 fixed inset-0 z-10"
      onClick={props.clicked}
    ></div>
  );
};

export default OverLay;
