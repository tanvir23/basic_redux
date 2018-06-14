import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'

export class MyComponent extends Component {

    render() {
        console.log(this.props.myProps);
        
        return (
            <View>
                <Text> prop </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    myProps: state.myState
})


export default connect(mapStateToProps)(MyComponent);
