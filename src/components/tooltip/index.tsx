"use client";

import React, { useState } from "react";
import { Popover } from "react-tiny-popover";

import "./styles.scss";

interface Props {
  text: string;
  children: React.ReactElement;
}

const Tooltip = (props: Props) => {
  const { text, children } = props;
  const [isTooltipShown, setIsTooltipShown] = useState(false);
  const openTooltip = () => {
    setIsTooltipShown(true);
  };

  const closeTooltip = () => {
    setIsTooltipShown(false);
  };

  const renderTooltip = () => (
    <Popover
      isOpen={isTooltipShown}
      positions={["top"]}
      align="center"
      content={
        <div className="tooltip-content with-fade-animation">{text}</div>
      }
      reposition={false}
    >
      {children}
    </Popover>
  );

  return (
    <>
      <div
        className="tooltip-toggle--desktop"
        onMouseOver={openTooltip}
        onMouseLeave={closeTooltip}
        aria-label={text}
        role={"navigation"}
        tabIndex={-1}
      >
        {renderTooltip()}
      </div>
      <div
        className="tooltip-toggle--mobile"
        onTouchStart={openTooltip}
        onTouchEnd={closeTooltip}
        aria-label={text}
        role={"navigation"}
        tabIndex={-1}
      >
        {renderTooltip()}
      </div>
    </>
  );
};

export default Tooltip;
