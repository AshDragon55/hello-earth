import {outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <link to="/">Home</link>
                </li>
                <li>
                    <link to="/about"></link>
                </li>
                <li>
                    <link to="/Contacts"></link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}

export default Layout;