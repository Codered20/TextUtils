import React from "react";

const Navbar = (props) => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-md"
                style={{
                    backgroundColor: props.Mode === "dark" ? "#333" : "#F5F5F5",
                    color: props.Mode === "dark" ? "#fff" : "#000",
                }}
                data-bs-theme={props.Mode}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://codered20.github.io/TextUtils/">{props.Title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href='https://codered20.github.io/TextUtils/'>Home</a>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.Mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
