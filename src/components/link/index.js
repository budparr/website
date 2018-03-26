import React from "react";
import Link from "gatsby-link";

export default ({ href, to, external, className, children }) => {
  if (to) {
    return (
      <Link
        to={to}
        className={className ? className : "text-purple hover:opacity-75"}
        target={external ? "_blank" : "_self"}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <a
        href={href}
        className={className ? className : "text-purple hover:opacity-75"}
        target={external ? "_blank" : "_self"}
      >
        {children}
      </a>
    );
  }
};
