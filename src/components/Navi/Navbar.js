/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import "../../css/navbar/navbar.css"
import { Link } from "react-router-dom"
export default class Navbar extends Component {
    render() {
        return (
            <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid m-3">
                    <h2 ><i class="fa fa-music"></i> <Link to="/" class="navbar-brand">EventApp</Link></h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link  class="nav-link" to="/"><i class="fa fa-guitar"></i> Events</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://github.com/keremdanismaz/orduluticketmaster"><i class="fab fa-github"></i> Github/Keydi</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn serachBtn" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
