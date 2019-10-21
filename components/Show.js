import React from 'react'


export default class Show extends React.Component {
    render() {
        return (
            <div className="modal fade readupdatelist" id="readupdatelist" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <table className="table" id='printableTable'>
                                <tbody>
                                    {this.props.table}
                                </tbody>
                            </table>
                            <form className='my-2' action='#'>
                                {this.props.editfrom}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}