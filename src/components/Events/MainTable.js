import React, { Component } from 'react'
import "../../css/mainTable/mainTable.css"

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as eventActions from "../../redux/actions/eventActions";


class MainTable extends Component {

    componentDidMount() {
        this.props.actions.getEvents()
    }

    render() {
        return (
            <div class="container">
                <h1 class="mt-5 title"><i class="fa fa-guitar"></i> Events</h1>
                <table class="mt-5 mb-5 table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col"><i class="fa fa-guitar"></i> Name</th>
                            <th scope="col"><i class="fa fa-calendar"></i> Date/Time</th>
                            <th scope="col"><i class="fa fa-clock"></i> Time Zone</th>
                            <th scope="col"><i class="fa fa-far fa-bell"></i> Status</th>
                            <th scope="col"><i class="fa fa-info-circle"></i> Detail</th>
                        </tr>
                    </thead>
                    <tbody class="body">
                        {this.props.events._embedded.events.map(event => (
                            <tr>
                                <td>{event.name}</td>
                                <td>{event.dates.start.localDate}/ {event.dates.start.localTime}</td>
                                <td>{event.dates.timezone}</td>
                                <td class="color">{event.dates.status.code}</td>
                                <td class="text-center"><button class="btn detailBtn">Detail</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.eventListReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getEvents: bindActionCreators(eventActions.getEvents, dispatch),
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTable);