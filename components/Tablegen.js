import React from 'react'


export default class TableGen extends React.Component{
    render(){
        return(
            <div>
            <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.."/>

            <table id="myTable">
                <tr class="header">
                    <th style="width:60%;">Name</th>
                    <th style="width:40%;">Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Berglunds snabbkop</td>
                    <td>Sweden</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Koniglich Essen</td>
                    <td>Germany</td>
                </tr>
            </table>
            <link rel="stylesheet" href="./static/css/table.css"/>
            <script src="./static/js/table.js"></script>
            </div>
        )
    }
}

