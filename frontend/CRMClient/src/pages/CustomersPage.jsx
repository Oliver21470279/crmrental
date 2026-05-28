import React from 'react'
import SideNav from "../components/SideNav.jsx";
import {useEffect} from "react";
import HeaderNav from "../components/HeaderNav.jsx";

export function CustomersPage() {

    useEffect(() => {

    })

    return (
        <>
            <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png"/>
                <link rel="icon" type="image/png" href="../assets/img/favicon.png"/>
                <title>
                    CRMRental
                </title>
                {/* <!--     Fonts and icons     -->*/}
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
                {/*<!-- Nucleo Icons -->*/}
                <link href="https://demos.creative-tim.com/argon-dashboard-pro/assets/css/nucleo-icons.css"
                      rel="stylesheet"/>
                <link href="https://demos.creative-tim.com/argon-dashboard-pro/assets/css/nucleo-svg.css"
                      rel="stylesheet"/>
                {/*// <!-- Font Awesome Icons -->*/}
                <script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></script>
                {/*// <!-- CSS Files -->*/}
                {/*<link id="pagestyle" href="argon-dashboard.css?v=2.1.0" rel="stylesheet"/>*/}
            </head>
            <body>

            <SideNav/>
            <HeaderNav/>
            </body>
        </>
    )
}