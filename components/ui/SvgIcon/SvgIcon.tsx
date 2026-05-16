import React from "react";

interface ISvgIcon {
  name?: string;
  size?: number;
  className: string;
}

export const SvgIcon = ({ name, size, className }: ISvgIcon) => (
  <svg className={className} width={size} height={size}>
    <use href={`/sprite.svg#sprite-${name}`} />
  </svg>
);

// Настройки по умолчанию
SvgIcon.defaultProps = {
  size: 30,
  className: "fill-dark",
};
