import React from 'react'


export default class Post extends React.Component {
    render() {
        return (
            <div className="modal fade readupdatelist" id="postform" tabIndex="-1" role="dialog" aria-labelledby="postform" aria-hidden="false">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form className='my-2' action='#'>
                                {this.props.postform}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}