"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import React, { PropsWithChildren, useEffect, useState } from "react";

type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName: string;
  Icon?: React.FC;
};

const ActiveLink = ({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const pathname = usePathname();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    // Dynamic route will be matched via props.as
    // Static route will be matched via props.href
    const linkPathname = new URL(
      (props.as || props.href) as string,
      location.href
    ).pathname;

    // Using URL().pathname to get rid of query and hash
    const activePathname = new URL(pathname, location.href).pathname;

    const newClassName =
      linkPathname === activePathname
        ? `${className} ${activeClassName}`.trim()
        : className;

    if (newClassName !== computedClassName) {
      setComputedClassName(newClassName);
    }
  }, [
    pathname,
    props.as,
    props.href,
    activeClassName,
    className,
    computedClassName,
  ]);

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
