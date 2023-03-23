import React from "react";

const Footer = () => {
    const currYear = new Date().getFullYear();
    return (<>
        <footer className="w-100 bg-light text-center">
            <p>© {currYear} Fresh Cakes. All Right Reserved | Terms and Conditions</p>
        </footer>
    </>);
};

export default Footer;