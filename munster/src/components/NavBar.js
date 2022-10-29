import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
    return (
        <>
            <nav className='navBar' >
                <div className="navBar-box" >
                    <Link to='/' className='logo' >
                        MUNster
                    </Link>
                    <ul className='navItems'>
                        <li className='pageItem' >
                            <Link to='/' className="pageLink">
                                Jobs
                            </Link>
                        </li>
                        <li className='pageItem' >
                            <Link to='/people' className="pageLink">
                                People
                            </Link>
                        </li>
                        <li className='pageItem' >
                            <Link to='/jobpost' className="pageLink">
                                Post a Job
                            </Link>
                        </li>
                    </ul>
                    <ul className="navIcons" >
                        <li className="pageIcon">
                            <Link to='/savedjobs' className="pageLink">
                                <i class="fa-regular fa-bookmark"></i>
                            </Link>
                        </li>
                        <li className="pageIcon">
                            <Link to='/profile' className="pageLink">
                                <i class="fa-regular fa-user"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;