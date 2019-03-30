import React, {Component} from 'react'
import Table from "../common/customTable";

class GeneralRequest extends Component {

    static getHeaders() {
        return [
            {
                key: "id",
                name: "ID",
                sortable: false,
                disable: false
            },
            {
                key: "request",
                name: "Request",
                sortable: false,
                disable: false
            },
            {
                key: "description",
                name: "Description",
                sortable: false,
                disable: false
            },
            {
                key: "status",
                name: "Status",
                sortable: false,
                disable: false
            },
            {
                key: "action",
                name: "Action",
                sortable: false,
                disable: false
            }
        ];
    }

    static getRows() {
        return [

            GeneralRequest.getRequests(
                "123",
                "broken coffee machine",
                "The machine is broken since 4 months, no action taken even after raising multiple times.",
                "OPEN"
            ),
            GeneralRequest.getRequests(
                "124",
                "broken printer",
                "The printer in the main hall is not working.",
                "OPEN"
            )

        ];
    }

    static getRequests(id, request, description, status) {
        return [
            {
                key: "id",
                value: id
            },
            {
                key: "request",
                value: request
            },
            {
                key: "description",
                value: description
            },
            {
                key: "status",
                value: status
            },
            {
                key: "action",
                value: <button>RESOLVE</button>
            }
        ];
    }

    render() {
        return (
            <div>
                <Table rows={GeneralRequest.getRows()} headers={GeneralRequest.getHeaders()}/>
            </div>
        )
    }
}

export default GeneralRequest;