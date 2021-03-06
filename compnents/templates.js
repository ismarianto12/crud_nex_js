import React, { useEffect, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Login from '../pages/login';
import datamenu from '/compnents/navbarData.json';
import Script from 'next/script'


export async function getServerSideProps({ req, res }) {
    const { user } = req.session
    if (!user) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }

    return {
        props: { user },
    }
}

export default function Templates({ container, user }) {
    const [collapsed, setCollapsed] = useState('');
    const [modal, setModal] = useState(false);
    const [val, setVal] = useState({
        event: ''
    });
    const [logged, setLogged] = useState(false);
    const [activeMenu, setActiveMenu] = useState('transaction');
    const [loc, setLoc] = useState({
        username: ''
    });

    useEffect(() => {
        const kl = localStorage.getItem('sess_app')
        if (!kl) {
            window.location.replace("/login");
        }

        const loc = JSON.parse(kl);
        const parsing = (kl == null) ? '' : loc.username
        const logged = (parsing) ? setLogged(true) : setLogged(false);
        setLoc({
            username: parsing
        });
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const currentLocation = window.location.pathname;
        console.log(e.currentTarget.id);
        const attrcurrent = e.currentTarget.getAttribute('id')

        if (attrcurrent) {
            setCollapsed(attrcurrent);
        } else {
            setCollapsed('')
        }
    }
    const ls = datamenu;

    return (
        <>
            <Head>
                <title>Administrator</title>
            </Head>
            <Script src="https://themekita.com/demo-atlantis-lite-bootstrap/livepreview/examples/assets/js/core/jquery.3.2.1.min.js"></Script>
            <Script src="https://themekita.com/demo-atlantis-lite-bootstrap/livepreview/examples/assets/js/atlantis.min.js"></Script>

            <Script src="https://themekita.com/demo-atlantis-lite-bootstrap/livepreview/examples/assets/js/core/bootstrap.min.js"></Script>


            <div className="wrapper">
                <div className="main-header">
                    {/* Logo Header */}
                    <div className="logo-header" data-background-color="blue">
                        <a href="" className="logo">

                        </a>
                        <button
                            className="navbar-toggler sidenav-toggler ml-auto"
                            type="button"
                            data-toggle="collapse"
                            data-target="collapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon">
                                <i className="icon-menu" />
                            </span>
                        </button>
                        <button className="topbar-toggler more">
                            <i className="icon-options-vertical" />
                        </button>
                        <div className="nav-toggle">
                            <button className="btn btn-toggle toggle-sidebar">
                                <i className="icon-menu" />
                            </button>
                        </div>
                    </div>

                    <nav className="navbar navbar-header navbar-expand-lg" data-background-color="blue2">
                        <div className="container-fluid">
                            <div className="collapse" id="search-nav">
                                <form className="navbar-left navbar-form nav-search mr-md-3">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <button type="submit" className="btn btn-search pr-1">
                                                <i className="fa fa-search search-icon" />
                                            </button>
                                        </div>
                                        <input type="text" placeholder="Search ..." className="form-control" />
                                    </div>
                                </form>
                            </div>
                            <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                                <li className="nav-item toggle-nav-search hidden-caret">
                                    <a className="nav-link" data-toggle="collapse" href="#search-nav" role="button" aria-expanded="false" aria-controls="search-nav">
                                        <i className="fa fa-search" />
                                    </a>
                                </li>
                                <li className="nav-item dropdown hidden-caret">
                                    <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-envelope" />
                                    </a>
                                    <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
                                        <li>
                                            <div className="dropdown-title d-flex justify-content-between align-items-center">
                                                Messages
                                                <a href="#" className="small">Mark all as read</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="message-notif-scroll scrollbar-outer">
                                                <div className="notif-center">
                                                    <a href="#">
                                                        <div className="notif-img">
                                                            <img src="../assets/img/jm_denis.jpg" alt="Img Profile" />
                                                        </div>
                                                        <div className="notif-content">
                                                            <span className="subject">Jimmy Denis</span>
                                                            <span className="block">
                                                                How are you ?
                                                            </span>
                                                            <span className="time">5 minutes ago</span>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="notif-img">
                                                            <img src="../assets/img/chadengle.jpg" alt="Img Profile" />
                                                        </div>
                                                        <div className="notif-content">
                                                            <span className="subject">Chad</span>
                                                            <span className="block">
                                                                Ok, Thanks !
                                                            </span>
                                                            <span className="time">12 minutes ago</span>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="notif-img">
                                                            <img src="../assets/img/mlane.jpg" alt="Img Profile" />
                                                        </div>
                                                        <div className="notif-content">
                                                            <span className="subject">Jhon Doe</span>
                                                            <span className="block">
                                                                Ready for the meeting today...
                                                            </span>
                                                            <span className="time">12 minutes ago</span>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="notif-img">
                                                            <img src="../assets/img/talha.jpg" alt="Img Profile" />
                                                        </div>
                                                        <div className="notif-content">
                                                            <span className="subject">Talha</span>
                                                            <span className="block">
                                                                Hi, Apa Kabar ?
                                                            </span>
                                                            <span className="time">17 minutes ago</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="see-all" href="javascript:void(0);">See all messages<i className="fa fa-angle-right" /> </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown hidden-caret">
                                    <a className="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-bell" />
                                        <span className="notification">4</span>
                                    </a>
                                    <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                                        <li>
                                            <div className="dropdown-title">You have 4 new notification</div>
                                        </li>
                                        <li>
                                            <div className="notif-scroll scrollbar-outer">
                                                <div className="notif-center">
                                                    <a href="#">
                                                        <div className="notif-icon notif-primary"> <i className="fa fa-user-plus" /> </div>
                                                        <div className="notif-content">
                                                            <span className="block">
                                                                New user registered
                                                            </span>
                                                            <span className="time">5 minutes ago</span>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="notif-icon notif-success"> <i className="fa fa-comment" /> </div>
                                                        <div className="notif-content">
                                                            <span className="block">
                                                                Rahmad commented on Admin
                                                            </span>
                                                            <span className="time">12 minutes ago</span>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="notif-img">
                                                            <img src="../assets/img/profile2.jpg" alt="Img Profile" />
                                                        </div>
                                                        <div className="notif-content">
                                                            <span className="block">
                                                                Reza send messages to you
                                                            </span>
                                                            <span className="time">12 minutes ago</span>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <div className="notif-icon notif-danger"> <i className="fa fa-heart" /> </div>
                                                        <div className="notif-content">
                                                            <span className="block">
                                                                Farrah liked Admin
                                                            </span>
                                                            <span className="time">17 minutes ago</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="see-all" href="javascript:void(0);">See all notifications<i className="fa fa-angle-right" /> </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown hidden-caret">
                                    <a className="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
                                        <i className="fas fa-layer-group" />
                                    </a>
                                    <div className="dropdown-menu quick-actions quick-actions-info animated fadeIn">
                                        <div className="quick-actions-header">
                                            <span className="title mb-1">Quick Actions</span>
                                            <span className="subtitle op-8">Shortcuts</span>
                                        </div>
                                        <div className="quick-actions-scroll scrollbar-outer">
                                            <div className="quick-actions-items">
                                                <div className="row m-0">
                                                    <a className="col-6 col-md-4 p-0" href="#">
                                                        <div className="quick-actions-item">
                                                            <i className="flaticon-file-1" />
                                                            <span className="text">Generated Report</span>
                                                        </div>
                                                    </a>
                                                    <a className="col-6 col-md-4 p-0" href="#">
                                                        <div className="quick-actions-item">
                                                            <i className="flaticon-database" />
                                                            <span className="text">Create New Database</span>
                                                        </div>
                                                    </a>
                                                    <a className="col-6 col-md-4 p-0" href="#">
                                                        <div className="quick-actions-item">
                                                            <i className="flaticon-pen" />
                                                            <span className="text">Create New Post</span>
                                                        </div>
                                                    </a>
                                                    <a className="col-6 col-md-4 p-0" href="#">
                                                        <div className="quick-actions-item">
                                                            <i className="flaticon-interface-1" />
                                                            <span className="text">Create New Task</span>
                                                        </div>
                                                    </a>
                                                    <a className="col-6 col-md-4 p-0" href="#">
                                                        <div className="quick-actions-item">
                                                            <i className="flaticon-list" />
                                                            <span className="text">Completed Tasks</span>
                                                        </div>
                                                    </a>
                                                    <a className="col-6 col-md-4 p-0" href="#">
                                                        <div className="quick-actions-item">
                                                            <i className="flaticon-file" />
                                                            <span className="text">Create New Invoice</span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown hidden-caret">
                                    <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false">
                                        <div className="avatar-sm">
                                            <img src="https://themekita.com/demo-atlantis-lite-bootstrap/livepreview/examples/assets/img/profile2.jpg" alt="..." className="avatar-img rounded-circle" />
                                        </div>
                                    </a>
                                    <ul className="dropdown-menu dropdown-user animated fadeIn">
                                        <div className="dropdown-user-scroll scrollbar-outer">
                                            <li>
                                                <div className="user-box">
                                                    <div className="avatar-lg"><img src="https://themekita.com/demo-atlantis-lite-bootstrap/livepreview/examples/assets/img/profile2.jpg" alt="image profile" className="avatar-img rounded" /></div>
                                                    <div className="u-text">
                                                        <h4>Hizrian</h4>
                                                        <p className="text-muted">hello@example.com</p><a href="profile.html" className="btn btn-xs btn-secondary btn-sm">View Profile</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">My Profile</a>
                                                <a className="dropdown-item" href="#">My Balance</a>
                                                <a className="dropdown-item" href="#">Inbox</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">Account Setting</a>
                                                <div className="dropdown-divider" />
                                                <a className="dropdown-item" href="#">Logout</a>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* End Navbar */}
                </div>
                {/* Sidebar */}
                <div className="sidebar sidebar-style-2">
                    <div className="sidebar-wrapper scrollbar scrollbar-inner">
                        <div className="sidebar-content">
                            <div className="user">
                                <div className="avatar-sm float-left mr-2">
                                    <img src="https://themekita.com/demo-atlantis-lite-bootstrap/livepreview/examples/assets/img/profile2.jpg" alt="..." className="avatar-img rounded-circle" />
                                </div>
                                <div className="info">
                                    <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                                        <span>
                                            Hizrian
                                            <span className="user-level">Administrator</span>
                                            <span className="caret" />
                                        </span>
                                    </a>
                                    <div className="clearfix" />
                                    <div className="collapse in" id="collapseExample">
                                        <ul className="nav">
                                            <li>
                                                <a href="#profile">
                                                    <span className="link-collapse">My Profile</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#edit">
                                                    <span className="link-collapse">Edit Profile</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#settings">
                                                    <span className="link-collapse">Settings</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-primary">
                                <li className="nav-item active">
                                    <a data-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                                        <i className="fa fa-home" />
                                        <p>Dashboard</p>
                                        <span className="caret" />
                                    </a>
                                    <div className="collapse" id="dashboard">
                                        <ul className="nav nav-collapse">
                                            <li>
                                                <a href="../demo1/index.html">
                                                    <span className="sub-item">Dashboard 1</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="../demo2/index.html">
                                                    <span className="sub-item">Dashboard 2</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-section">
                                    <span className="sidebar-mini-icon">
                                        <i className="fa fa-ellipsis-h" />
                                    </span>
                                    <h4 className="text-section">Components</h4>
                                </li>
                                <li className="nav-item">
                                    <a data-toggle="collapse" href="#base">
                                        <i className="fa fa-cubes" />
                                        <p>Base</p>
                                        <span className="caret" />
                                    </a>
                                    <div className="collapse" id="base">
                                        <ul className="nav nav-collapse">
                                            <li>
                                                <Link href="/kategori">
                                                    <a href="">
                                                        <span className="sub-item">kategori</span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/jenis">
                                                    <a>
                                                        <span className="sub-item">Jenis barang</span>
                                                    </a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/barang">
                                                    <a>
                                                        <span className="sub-item">Barang</span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/purchase">
                                                    <a>
                                                        <span className="sub-item">Purchase</span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/return">
                                                    <a href="components/notifications.html">
                                                        <span className="sub-item">Return</span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="components/sweetalert.html">
                                                    <span className="sub-item">Sweet Alert</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components/font-awesome-icons.html">
                                                    <span className="sub-item">Font Awesome Icons</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components/simple-line-icons.html">
                                                    <span className="sub-item">Simple Line Icons</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components/flaticons.html">
                                                    <span className="sub-item">Flaticons</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="components/typography.html">
                                                    <span className="sub-item">Typography</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a data-toggle="collapse" href="#sidebarLayouts">
                                        <i className="fa fa-th-list" />
                                        <p>Sidebar Layouts</p>
                                        <span className="caret" />
                                    </a>
                                    <div className="collapse" id="sidebarLayouts">
                                        <ul className="nav nav-collapse">
                                            <li>
                                                <a href="sidebar-style-1.html">
                                                    <span className="sub-item">Sidebar Style 1</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="overlay-sidebar.html">
                                                    <span className="sub-item">Overlay Sidebar</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="compact-sidebar.html">
                                                    <span className="sub-item">Compact Sidebar</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="static-sidebar.html">
                                                    <span className="sub-item">Static Sidebar</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="icon-menu.html">
                                                    <span className="sub-item">Icon Menu</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a data-toggle="collapse" href="#forms">
                                        <i className="fa fa-align-center" />
                                        <p>Forms</p>
                                        <span className="caret" />
                                    </a>
                                    <div className="collapse" id="forms">
                                        <ul className="nav nav-collapse">
                                            <li>
                                                <a href="forms/forms.html">
                                                    <span className="sub-item">Basic Form</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                {/* End Sidebar */}
                <div className="main-panel">
                    <div className="content">

                        {container}

                    </div>
                    <footer className="footer">
                        <div className="container-fluid">
                            <nav className="pull-left">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.themekita.com">
                                            ThemeKita
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Help
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Licenses
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="copyright ml-auto">
                                2018, made with <i className="fa fa-heart heart text-danger" /> by{" "}
                                <a href="https://www.themekita.com">ThemeKita</a>
                            </div>
                        </div>
                    </footer>
                </div>
                {/* Custom template | don't include it in your project! */}
                <div className="custom-template">
                    <div className="title">Settings</div>
                    <div className="custom-content">
                        <div className="switcher">
                            <div className="switch-block">
                                <h4>Logo Header</h4>
                                <div className="btnSwitch">
                                    <button
                                        type="button"
                                        className="changeLogoHeaderColor"
                                        data-color="dark"
                                    />
                                    <button
                                        type="button"
                                        className="selected changeLogoHeaderColor"
                                        data-color="blue"
                                    />
                                    <button
                                        type="button"
                                        className="changeLogoHeaderColor"
                                        data-color="purple"
                                    />
                                    <button
                                        type="button"
                                        className="changeLogoHeaderColor"
                                        data-color="light-blue"
                                    />
                                    <button
                                        type="button"
                                        className="changeLogoHeaderColor"
                                        data-color="green"
                                    />
                                    <button
                                        type="button"
                                        className="changeLogoHeaderColor"
                                        data-color="orange"
                                    />
                                    <button
                                        type="button"
                                        className="changeLogoHeaderColor"
                                        data-color="red"
                                    />
                                    <button
                                        type="button"
                                        className="changeLogoHeaderColor"
                                        data-color="white"
                                    />
                                    <br />
                                    <button
                                        type="button"
                                        className="changeLogoHeaderColor"
                                        data-color="dark2"
                                    />
                                    <button
                                        type="button"
                                        className="changeLogoHeaderColor"
                                        data-color="blue2"
                                    />
                                    <button
                                        type="button"
                                        className="changeLogoHeaderColor"
                                        data-color="purple2"
                                    />
                                    <button
                                        type="button"
                                        className="changeLogoHeaderColor"
                                        data-color="light-blue2"
                                    />
                                    <button
                                        type="button"
                                        className="changeLogoHeaderColor"
                                        data-color="green2"
                                    />
                                    <button
                                        type="button"
                                        className="changeLogoHeaderColor"
                                        data-color="orange2"
                                    />
                                    <button
                                        type="button"
                                        className="changeLogoHeaderColor"
                                        data-color="red2"
                                    />
                                </div>
                            </div>
                            <div className="switch-block">
                                <h4>Navbar Header</h4>
                                <div className="btnSwitch">
                                    <button
                                        type="button"
                                        className="changeTopBarColor"
                                        data-color="dark"
                                    />
                                    <button
                                        type="button"
                                        className="changeTopBarColor"
                                        data-color="blue"
                                    />
                                    <button
                                        type="button"
                                        className="changeTopBarColor"
                                        data-color="purple"
                                    />
                                    <button
                                        type="button"
                                        className="changeTopBarColor"
                                        data-color="light-blue"
                                    />
                                    <button
                                        type="button"
                                        className="changeTopBarColor"
                                        data-color="green"
                                    />
                                    <button
                                        type="button"
                                        className="changeTopBarColor"
                                        data-color="orange"
                                    />
                                    <button
                                        type="button"
                                        className="changeTopBarColor"
                                        data-color="red"
                                    />
                                    <button
                                        type="button"
                                        className="changeTopBarColor"
                                        data-color="white"
                                    />
                                    <br />
                                    <button
                                        type="button"
                                        className="changeTopBarColor"
                                        data-color="dark2"
                                    />
                                    <button
                                        type="button"
                                        className="selected changeTopBarColor"
                                        data-color="blue2"
                                    />
                                    <button
                                        type="button"
                                        className="changeTopBarColor"
                                        data-color="purple2"
                                    />
                                    <button
                                        type="button"
                                        className="changeTopBarColor"
                                        data-color="light-blue2"
                                    />
                                    <button
                                        type="button"
                                        className="changeTopBarColor"
                                        data-color="green2"
                                    />
                                    <button
                                        type="button"
                                        className="changeTopBarColor"
                                        data-color="orange2"
                                    />
                                    <button
                                        type="button"
                                        className="changeTopBarColor"
                                        data-color="red2"
                                    />
                                </div>
                            </div>
                            <div className="switch-block">
                                <h4>Sidebar</h4>
                                <div className="btnSwitch">
                                    <button
                                        type="button"
                                        className="selected changeSideBarColor"
                                        data-color="white"
                                    />
                                    <button
                                        type="button"
                                        className="changeSideBarColor"
                                        data-color="dark"
                                    />
                                    <button
                                        type="button"
                                        className="changeSideBarColor"
                                        data-color="dark2"
                                    />
                                </div>
                            </div>
                            <div className="switch-block">
                                <h4>Background</h4>
                                <div className="btnSwitch">
                                    <button
                                        type="button"
                                        className="changeBackgroundColor"
                                        data-color="bg2"
                                    />
                                    <button
                                        type="button"
                                        className="changeBackgroundColor selected"
                                        data-color="bg1"
                                    />
                                    <button
                                        type="button"
                                        className="changeBackgroundColor"
                                        data-color="bg3"
                                    />
                                    <button
                                        type="button"
                                        className="changeBackgroundColor"
                                        data-color="dark"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-toggle">
                        <i className="flaticon-settings" />
                    </div>
                </div>
            </div>

        </>


    )

}
