import React from 'react';
import { connect } from 'react-redux';

class Graph extends React.Component {

    render() {
        return (
            <div className="graph">
                Graph
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Graph);
