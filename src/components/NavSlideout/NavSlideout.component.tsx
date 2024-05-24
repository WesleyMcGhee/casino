// Global imports
import { Link } from "wouter";

// Types
import type { ReactElement } from "react";
import type { NavSlideoutProps } from "./NavSlideout.types";

// Styles
import "./NavSlideout.css";

function NavSlideout({ links }: NavSlideoutProps): ReactElement {
  return (
    <div className="slideout">
      {links.map((link, key) => {
        return (
          <div key={key} className="slideoutItem">
            <Link href={link.link} className="slideoutLink">
              {link.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export { NavSlideout };
