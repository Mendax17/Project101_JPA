import React from "react";

export default function Navi() {
  return (
    <>
      <nav
        className="navbar-absolute navbar-transparent navbar navbar-expand-lg"
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 30px 10px 15px",
          width: "100%",
          transition: "all 300ms ease 0s",
          position: "absolute",
          zIndex: 1050,
          marginBottom: "0px",
          background: "transparent",
        }}
      >
        <div
          className="container-fluid"
          style={{
            boxSizing: "border-box",
            width: "100%",
            marginRight: "auto",
            marginLeft: "auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "15px",
            paddingLeft: "15px",
          }}
        >
          <div
            className="navbar-wrapper"
            style={{
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              className="navbar-toggle d-inline"
              style={{ boxSizing: "border-box", display: "inline" }}
            >
              <button
                className="navbar-toggler"
                type="button"
                aria-label="Toggle navigation"
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  overflow: "visible",
                  textTransform: "none",
                  fontFamily: "Poppins, sans-serif",
                  appearance: "button",
                  padding: "0.25rem 0.75rem",
                  border: "0.0625rem solid transparent",
                  borderRadius: "0.25rem",
                  fontSize: "0.99925rem",
                  lineHeight: 1,
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <span
                  className="navbar-toggler-bar bar1"
                  style={{
                    boxSizing: "border-box",
                    outline: "transparent solid 1px",
                    animation:
                      "500ms ease 0s 1 normal forwards running topbar-back",
                    top: "0px",
                    borderRadius: "1px",
                    background: "rgb(255, 255, 255)",
                    display: "block",
                    position: "relative",
                    width: "22px",
                    height: "1px",
                  }}
                />
                <span
                  className="navbar-toggler-bar bar2"
                  style={{
                    boxSizing: "border-box",
                    outline: "transparent solid 1px",
                    opacity: 1,
                    borderRadius: "1px",
                    background: "rgb(255, 255, 255)",
                    display: "block",
                    position: "relative",
                    height: "1px",
                    marginTop: "7px",
                    transition: "width 0.2s linear 0s",
                    width: "17px",
                  }}
                />
                <span
                  className="navbar-toggler-bar bar3"
                  style={{
                    boxSizing: "border-box",
                    outline: "transparent solid 1px",
                    animation:
                      "500ms ease 0s 1 normal forwards running bottombar-back",
                    bottom: "0px",
                    borderRadius: "1px",
                    background: "rgb(255, 255, 255)",
                    display: "block",
                    position: "relative",
                    width: "22px",
                    height: "1px",
                    marginTop: "7px",
                  }}
                />
              </button>
            </div>
            <a
              className="navbar-brand"
              href="http://localhost:3000/admin/dashboard#pablo"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                backgroundColor: "transparent",
                fontWeight: 300,
                whiteSpace: "nowrap",
                display: "inline-block",
                marginRight: "0.9375rem",
                lineHeight: "inherit",
                paddingTop: "0.3125rem",
                paddingBottom: "0.3125rem",
                color: "rgb(255, 255, 255)",
                marginTop: "3px",
                textTransform: "uppercase",
                fontSize: "1rem",
                marginLeft: "20px",
                position: "relative",
              }}
            >
              Dashboard
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            style={{
              boxSizing: "border-box",
              margin: "0px",
              overflow: "visible",
              textTransform: "none",
              fontFamily: "Poppins, sans-serif",
              appearance: "button",
              padding: "0.25rem 0.75rem",
              border: "0.0625rem solid transparent",
              borderRadius: "0.25rem",
              fontSize: "0.99925rem",
              lineHeight: 1,
              backgroundColor: "transparent",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <span
              className="navbar-toggler-bar navbar-kebab"
              style={{
                boxSizing: "border-box",
                background: "rgb(255, 255, 255)",
                display: "block",
                position: "relative",
                borderRadius: "50%",
                height: "4px",
                width: "4px",
                marginBottom: "3px",
              }}
            />
            <span
              className="navbar-toggler-bar navbar-kebab"
              style={{
                boxSizing: "border-box",
                background: "rgb(255, 255, 255)",
                display: "block",
                position: "relative",
                borderRadius: "50%",
                height: "4px",
                width: "4px",
                marginBottom: "3px",
                marginTop: "0px",
              }}
            />
            <span
              className="navbar-toggler-bar navbar-kebab"
              style={{
                boxSizing: "border-box",
                background: "rgb(255, 255, 255)",
                display: "block",
                position: "relative",
                borderRadius: "50%",
                height: "4px",
                width: "4px",
                marginBottom: "3px",
                marginTop: "0px",
              }}
            />
          </button>
          <div
            className="collapse navbar-collapse"
            style={{
              boxSizing: "border-box",
              flexBasis: "100%",
              flexGrow: 1,
              alignItems: "center",
              display: "none",
            }}
          >
            <ul
              className="ml-auto navbar-nav"
              style={{
                boxSizing: "border-box",
                marginTop: "0px",
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                paddingLeft: "0px",
                marginBottom: "0px",
                marginLeft: "auto",
              }}
            >
              <div
                className="search-bar input-group"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "stretch",
                  width: "100%",
                  position: "relative",
                  borderRadius: "25px",
                  zIndex: 4,
                  height: "43px",
                  paddingRight: "5px",
                  margin: "5px 0px 0px",
                  marginBottom: "0px",
                  marginLeft: "0px",
                }}
              >
                <button
                  className="btn btn-link"
                  type="button"
                  style={{
                    boxSizing: "border-box",
                    textTransform: "none",
                    fontFamily: "Poppins, sans-serif",
                    appearance: "button",
                    textAlign: "center",
                    verticalAlign: "middle",
                    userSelect: "none",
                    fontSize: "0.875rem",
                    lineHeight: "1.35em",
                    textDecoration: "none",
                    overflow: "hidden",
                    borderRadius: "0.4285rem",
                    transition: "all 0.15s ease 0s",
                    position: "relative",
                    border: "0px",
                    padding: "0.5rem 0.7rem",
                    background: "transparent",
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    fontWeight: 600,
                    color: "rgb(52, 70, 117)",
                    margin: "0px",
                    cursor: "pointer",
                    marginLeft: "-3px",
                    display: "flex",
                  }}
                >
                  <i
                    className="tim-icons icon-zoom-split"
                    style={{
                      boxSizing: "border-box",
                      font: "1em / 1 Nucleo",
                      display: "inline-block",
                      verticalAlign: "middle",
                      speak: "none",
                      textTransform: "none",
                      WebkitFontSmoothing: "antialiased",
                      fontSize: "20px",
                      color: "rgb(255, 255, 255)",
                      position: "relative",
                      top: "1px",
                      marginRight: "12px",
                      marginTop: "0px",
                    }}
                  />
                  <span
                    className="d-lg-none d-md-block"
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      display: "block",
                      margin: "0px",
                      textTransform: "uppercase",
                      fontWeight: 300,
                      color: "rgb(34, 42, 66)",
                    }}
                  >
                    Search
                  </span>
                </button>
              </div>
              <li
                className="dropdown nav-item"
                style={{
                  boxSizing: "border-box",
                  color: "rgb(255, 255, 255)",
                  position: "relative",
                  padding: "0px 10px",
                  margin: "5px 0px",
                }}
              >
                <a
                  className="dropdown-toggle nav-link"
                  aria-expanded="false"
                  aria-haspopup="true"
                  href="http://localhost:3000/admin/dashboard#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    fontWeight: 300,
                    whiteSpace: "nowrap",
                    padding: "0.5rem 1rem",
                    display: "block",
                    color: "rgb(255, 255, 255)",
                    paddingRight: "0px",
                    paddingLeft: "0px",
                    transition: "all 300ms ease 0s",
                    paddingBottom: "0px",
                  }}
                >
                  <div
                    className="notification d-none d-lg-block d-xl-block"
                    style={{
                      boxSizing: "border-box",
                      background: "rgb(253, 93, 147)",
                      borderRadius: "0.875rem",
                      border: "1px solid rgb(253, 93, 147)",
                      color: "rgb(255, 255, 255)",
                      height: "6px",
                      width: "6px",
                      position: "absolute",
                      textAlign: "center",
                      fontSize: "12px",
                      fontWeight: 800,
                      top: "10px",
                      right: "10px",
                      display: "none",
                    }}
                  />
                  <i
                    className="tim-icons icon-sound-wave"
                    style={{
                      boxSizing: "border-box",
                      font: "1em / 1 Nucleo",
                      display: "inline-block",
                      speak: "none",
                      textTransform: "none",
                      WebkitFontSmoothing: "antialiased",
                      verticalAlign: "middle",
                      fontSize: "20px",
                      opacity: 1,
                      marginLeft: "4px",
                      marginRight: "5px",
                    }}
                  />
                  <p
                    className="d-lg-none"
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      fontWeight: 300,
                      color: "rgba(255, 255, 255, 0.8)",
                      marginBottom: "5px",
                      display: "inline-block",
                      textTransform: "uppercase",
                      marginLeft: "7px",
                    }}
                  >
                    Notifications
                  </p>
                </a>
                <ul
                  className="dropdown-navbar dropdown-menu dropdown-menu-right"
                  aria-hidden="true"
                  role="menu"
                  tabIndex="-1"
                  style={{
                    boxSizing: "border-box",
                    padding: "0.5rem 0px",
                    listStyle: "none",
                    zIndex: 1000,
                    minWidth: "10rem",
                    fontSize: "0.875rem",
                    color: "rgb(82, 95, 127)",
                    textAlign: "left",
                    backgroundClip: "padding-box",
                    borderRadius: "0.1428rem",
                    cssFloat: "none",
                    visibility: "hidden",
                    opacity: 0,
                    display: "none",
                    border: "0px",
                    transition: "none 0s ease 0s",
                    margin: "0px 1rem",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    width: "auto",
                    marginBottom: "0px",
                    marginTop: "0px",
                    right: "0px",
                    left: "auto",
                    transform: "translate3d(0px, -20px, 0px)",
                    top: "100%",
                    position: "static",
                  }}
                >
                  <li
                    className="nav-link"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(255, 255, 255)",
                      display: "block",
                      padding: "0px 10px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                      transition: "all 300ms ease 0s",
                      paddingBottom: "0px",
                    }}
                  >
                    <button
                      className="nav-item dropdown-item"
                      type="button"
                      role="menuitem"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "0px",
                        margin: "0px",
                        lineHeight: "inherit",
                        overflow: "visible",
                        textTransform: "none",
                        fontFamily: "Poppins, sans-serif",
                        appearance: "button",
                        padding: "0.25rem 1.5rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        color: "rgb(33, 37, 41)",
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transition: "all 150ms linear 0s",
                        fontSize: "0.75rem",
                        paddingTop: "0.6rem",
                        paddingBottom: "0.6rem",
                        marginTop: "0px",
                        paddingLeft: "24px",
                      }}
                    >
                      Mike John responded to your email
                    </button>
                  </li>
                  <li
                    className="nav-link"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(255, 255, 255)",
                      display: "block",
                      padding: "0px 10px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                      transition: "all 300ms ease 0s",
                      paddingBottom: "0px",
                    }}
                  >
                    <button
                      className="nav-item dropdown-item"
                      type="button"
                      role="menuitem"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "0px",
                        margin: "0px",
                        lineHeight: "inherit",
                        overflow: "visible",
                        textTransform: "none",
                        fontFamily: "Poppins, sans-serif",
                        appearance: "button",
                        padding: "0.25rem 1.5rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        color: "rgb(33, 37, 41)",
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transition: "all 150ms linear 0s",
                        fontSize: "0.75rem",
                        paddingTop: "0.6rem",
                        paddingBottom: "0.6rem",
                        marginTop: "0px",
                        paddingLeft: "24px",
                      }}
                    >
                      You have 5 more tasks
                    </button>
                  </li>
                  <li
                    className="nav-link"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(255, 255, 255)",
                      display: "block",
                      padding: "0px 10px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                      transition: "all 300ms ease 0s",
                      paddingBottom: "0px",
                    }}
                  >
                    <button
                      className="nav-item dropdown-item"
                      type="button"
                      role="menuitem"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "0px",
                        margin: "0px",
                        lineHeight: "inherit",
                        overflow: "visible",
                        textTransform: "none",
                        fontFamily: "Poppins, sans-serif",
                        appearance: "button",
                        padding: "0.25rem 1.5rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        color: "rgb(33, 37, 41)",
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transition: "all 150ms linear 0s",
                        fontSize: "0.75rem",
                        paddingTop: "0.6rem",
                        paddingBottom: "0.6rem",
                        marginTop: "0px",
                        paddingLeft: "24px",
                      }}
                    >
                      Your friend Michael is in town
                    </button>
                  </li>
                  <li
                    className="nav-link"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(255, 255, 255)",
                      display: "block",
                      padding: "0px 10px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                      transition: "all 300ms ease 0s",
                      paddingBottom: "0px",
                    }}
                  >
                    <button
                      className="nav-item dropdown-item"
                      type="button"
                      role="menuitem"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "0px",
                        margin: "0px",
                        lineHeight: "inherit",
                        overflow: "visible",
                        textTransform: "none",
                        fontFamily: "Poppins, sans-serif",
                        appearance: "button",
                        padding: "0.25rem 1.5rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        color: "rgb(33, 37, 41)",
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transition: "all 150ms linear 0s",
                        fontSize: "0.75rem",
                        paddingTop: "0.6rem",
                        paddingBottom: "0.6rem",
                        marginTop: "0px",
                        paddingLeft: "24px",
                      }}
                    >
                      Another notification
                    </button>
                  </li>
                  <li
                    className="nav-link"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(255, 255, 255)",
                      display: "block",
                      padding: "0px 10px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                      transition: "all 300ms ease 0s",
                      paddingBottom: "0px",
                    }}
                  >
                    <button
                      className="nav-item dropdown-item"
                      type="button"
                      role="menuitem"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "0px",
                        margin: "0px",
                        lineHeight: "inherit",
                        overflow: "visible",
                        textTransform: "none",
                        fontFamily: "Poppins, sans-serif",
                        appearance: "button",
                        padding: "0.25rem 1.5rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        color: "rgb(33, 37, 41)",
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transition: "all 150ms linear 0s",
                        fontSize: "0.75rem",
                        paddingTop: "0.6rem",
                        paddingBottom: "0.6rem",
                        marginTop: "0px",
                        paddingLeft: "24px",
                      }}
                    >
                      Another one
                    </button>
                  </li>
                </ul>
              </li>
              <li
                className="dropdown nav-item"
                style={{
                  boxSizing: "border-box",
                  color: "rgb(255, 255, 255)",
                  position: "relative",
                  padding: "0px 10px",
                  margin: "5px 0px",
                }}
              >
                <a
                  className="dropdown-toggle nav-link"
                  aria-expanded="false"
                  aria-haspopup="true"
                  href="http://localhost:3000/admin/dashboard#"
                  style={{
                    boxSizing: "border-box",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                    fontWeight: 300,
                    whiteSpace: "nowrap",
                    padding: "0.5rem 1rem",
                    display: "block",
                    color: "rgb(255, 255, 255)",
                    paddingRight: "0px",
                    paddingLeft: "0px",
                    transition: "all 300ms ease 0s",
                    paddingBottom: "0px",
                  }}
                >
                  <div
                    className="photo"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "50%",
                      overflow: "hidden",
                      display: "inline-block",
                      height: "30px",
                      width: "30px",
                      verticalAlign: "middle",
                    }}
                  >
                    <img
                      alt="..."
                      src="http://localhost:3000/black-dashboard-react/static/media/anime3.4438e5067f2029f9e058.png"
                      style={{
                        boxSizing: "border-box",
                        borderStyle: "none",
                        verticalAlign: "middle",
                        borderRadius: "0.2857rem",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                    />
                  </div>
                  <b
                    className="caret d-none d-lg-block d-xl-block"
                    style={{
                      boxSizing: "border-box",
                      fontWeight: "bolder",
                      transition: "all 150ms ease 0s",
                      borderTop: "4px dashed",
                      borderRight: "4px solid transparent",
                      borderLeft: "4px solid transparent",
                      width: "0px",
                      height: "0px",
                      verticalAlign: "middle",
                      marginTop: "-5px",
                      position: "absolute",
                      top: "30px",
                      marginLeft: "5px",
                      display: "none",
                    }}
                  />
                  <p
                    className="d-lg-none"
                    style={{
                      boxSizing: "border-box",
                      marginTop: "0px",
                      fontWeight: 300,
                      color: "rgba(255, 255, 255, 0.8)",
                      marginBottom: "5px",
                      display: "inline-block",
                      textTransform: "uppercase",
                      marginLeft: "7px",
                    }}
                  >
                    Log out
                  </p>
                </a>
                <ul
                  className="dropdown-navbar dropdown-menu dropdown-menu-right"
                  aria-hidden="true"
                  role="menu"
                  tabIndex="-1"
                  style={{
                    boxSizing: "border-box",
                    padding: "0.5rem 0px",
                    listStyle: "none",
                    zIndex: 1000,
                    minWidth: "10rem",
                    fontSize: "0.875rem",
                    color: "rgb(82, 95, 127)",
                    textAlign: "left",
                    backgroundClip: "padding-box",
                    borderRadius: "0.1428rem",
                    cssFloat: "none",
                    visibility: "hidden",
                    opacity: 0,
                    display: "none",
                    border: "0px",
                    transition: "none 0s ease 0s",
                    margin: "0px 1rem",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    width: "auto",
                    marginBottom: "0px",
                    marginTop: "0px",
                    right: "0px",
                    left: "auto",
                    transform: "translate3d(0px, -20px, 0px)",
                    top: "100%",
                    position: "static",
                  }}
                >
                  <li
                    className="nav-link"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(255, 255, 255)",
                      display: "block",
                      padding: "0px 10px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                      transition: "all 300ms ease 0s",
                      paddingBottom: "0px",
                    }}
                  >
                    <button
                      className="nav-item dropdown-item"
                      type="button"
                      role="menuitem"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "0px",
                        margin: "0px",
                        lineHeight: "inherit",
                        overflow: "visible",
                        textTransform: "none",
                        fontFamily: "Poppins, sans-serif",
                        appearance: "button",
                        padding: "0.25rem 1.5rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        color: "rgb(33, 37, 41)",
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transition: "all 150ms linear 0s",
                        fontSize: "0.75rem",
                        paddingTop: "0.6rem",
                        paddingBottom: "0.6rem",
                        marginTop: "0px",
                        paddingLeft: "24px",
                      }}
                    >
                      Profile
                    </button>
                  </li>
                  <li
                    className="nav-link"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(255, 255, 255)",
                      display: "block",
                      padding: "0px 10px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                      transition: "all 300ms ease 0s",
                      paddingBottom: "0px",
                    }}
                  >
                    <button
                      className="nav-item dropdown-item"
                      type="button"
                      role="menuitem"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "0px",
                        margin: "0px",
                        lineHeight: "inherit",
                        overflow: "visible",
                        textTransform: "none",
                        fontFamily: "Poppins, sans-serif",
                        appearance: "button",
                        padding: "0.25rem 1.5rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        color: "rgb(33, 37, 41)",
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transition: "all 150ms linear 0s",
                        fontSize: "0.75rem",
                        paddingTop: "0.6rem",
                        paddingBottom: "0.6rem",
                        marginTop: "0px",
                        paddingLeft: "24px",
                      }}
                    >
                      Settings
                    </button>
                  </li>
                  <li
                    className="dropdown-divider"
                    tabIndex="-1"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(255, 255, 255)",
                      margin: "0.5rem 0px",
                      overflow: "hidden",
                      borderTop: "1px solid rgb(233, 236, 239)",
                      height: "0px",
                      padding: "0px 10px",
                      backgroundColor: "rgba(222, 222, 222, 0.5)",
                    }}
                  />
                  <li
                    className="nav-link"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(255, 255, 255)",
                      display: "block",
                      padding: "0px 10px",
                      paddingRight: "0px",
                      paddingLeft: "0px",
                      transition: "all 300ms ease 0s",
                      paddingBottom: "0px",
                    }}
                  >
                    <button
                      className="nav-item dropdown-item"
                      type="button"
                      role="menuitem"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "0px",
                        margin: "0px",
                        lineHeight: "inherit",
                        overflow: "visible",
                        textTransform: "none",
                        fontFamily: "Poppins, sans-serif",
                        appearance: "button",
                        padding: "0.25rem 1.5rem",
                        whiteSpace: "nowrap",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        color: "rgb(33, 37, 41)",
                        textAlign: "inherit",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        transition: "all 150ms linear 0s",
                        fontSize: "0.75rem",
                        paddingTop: "0.6rem",
                        paddingBottom: "0.6rem",
                        marginTop: "0px",
                        paddingLeft: "24px",
                      }}
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </li>
              <li
                className="separator d-lg-none"
                style={{
                  boxSizing: "border-box",
                  color: "rgb(255, 255, 255)",
                  padding: "0px 10px",
                }}
              />
            </ul>
          </div>
        </div>
      </nav>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  line-height: 1.15;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(34, 42, 66, 0);
}

body {
  box-sizing: border-box;
  margin: 0px;
  font-family: Poppins, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(82, 95, 127);
  text-align: left;
  background-color: rgb(30, 30, 47);
  -webkit-font-smoothing: antialiased;
}
`,
        }}
      />
    </>
  );
}