import React from "react";
import {View, Text, Alert, Dimensions, AsyncStorage, Clipboard, TouchableOpacity} from "react-native";

const person = {
    name: 'James Garfield',
    age: 50,
    occupation: 'President of the United States'
}

const key = "President";

const {width, height} = Dimensions.get('window');

class Playinground extends React.Component {
    constructor() {
        super()
        this.state = {
            person: {},
            position: {}
        }

        this.getPerson = this.getPerson.bind(this);
     }

    componentDidMount () {
        AsyncStorage.setItem(key, JSON.stringify(person))
            .then(() => console.log('item stored...'))
            .catch((err) => console.log('err: ', err))

        navigator.geolocation.getCurrentPosition(
            (success) => {
                this.setState({position: success.coords})
            }
        )
    }

    copyText = async () => {
        try {
            await Clipboard.setString('hello there guys this declan');
            alert('text copied');
        } catch (error) {
            console.log(error);
            Alert.alert('Error', error.message)
        }
    }

    getPerson () {
        AsyncStorage.getItem(key)
            .then((res) => this.setState({ person: JSON.parse(res) }))
            .catch((err) => console.log('err: ', err))
        }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Start Playing</Text>
                <TouchableOpacity onPress={this.copyText}>
                    <Text>Copy Text</Text>
                    <Text>{width}</Text>
                    <Text>{height}</Text>
                </TouchableOpacity>
                <Text>here {this.state.position.longitude}</Text>
            </View>
        )
    }
}

export default Playinground;