import React, { FC } from "react";
import "./AppButton.scss";

interface Props {
  title?: string;
  href?: string;
  blank?: boolean;
  onClick?: () => void;
}

export const AppButton: FC<Props> = ({
  title,
  children,
  onClick,
  href,
  blank,
}) => {
  return (
    <a
      href={href}
      target={blank ? "_blank" : ""}
      className="app-button"
      onClick={onClick}
    >
      <span>{title || children}</span>
    </a>
  );
};
