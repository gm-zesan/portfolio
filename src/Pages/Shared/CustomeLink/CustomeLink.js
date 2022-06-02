import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div className="nav-link-wrapper">
            <Link
                style={{
                    color: match ? "#FFD15C" : "#fff",
                    borderBottom: match ? "2px solid #FFD15C" : "none",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;
