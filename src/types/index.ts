export type ValueOf<T> = T[keyof T];

export type BaseComponentProps = {
  /**
   * Custom styles that will be applied to the container element
   */
  containerStyle?: string;
};

export type SvgIconProps = {
  fill?: string;
  stroke?: string;
  width?: string;
  height?: string;
  className?: string;
  onClick?: () => void;
};
