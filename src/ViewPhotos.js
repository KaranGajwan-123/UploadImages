import React, {Component} from 'react';
import {
    View,
    Platform,
    FlatList,
    Image,
    Button,
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'

import {styles} from './Styles';

export default class ViewPhotos extends Component {
    constructor(props) {
        super();
        this.state = {
            imageList: [],
        };
    }

    componentDidMount() {
        this.extractRequiredImageData();
    }

    _onPress() {
        let imageData = this.props.navigation.state.params;

        RNFetchBlob.fetch('POST', ' https://kraken.io/docs/upload-url', {
            Authorization: "Bearer access-token",
            'Content-Type': 'multipart/form-data',
        }, [
            
            { name: 'avatar-png', filename: 'avatar-png.png', type: 'image/png', data: imageData.last },
     
            {
                name: 'auth', data: JSON.stringify({
                    'api_key': 'd6e4e8894e07267916d49c4d8f681b17m',
                    'api_secret': '8342305f1b5df51abcbb2214890b1cc29ec7c09a'
                })
            },
        ]).then((resp) => {
           console.log("Uploaded successfully")
        }).catch((err) => {
            console.log("Failed to Upload")
        })
    }

    extractRequiredImageData = () => {
        let imageData = this.props.navigation.state.params;
        let imageList = [];

        for (let i = 0; i < Object.keys(imageData).length; i++) {
            let data = imageData[String(i)];
            let image = {
                id: String(i),
                contentType: data.mime,
                fileSize: data.size,
                filePath: data.path,
            };

            if (Platform.OS === 'ios') {
                image.fileName = data.filename;
            } else {
                let path = data.path.split('/');
                image.fileName = path[path.length - 1];
            }

            imageList.push(image);
        }
        this.setState({
            imageList,
        });
    };

    render() {
        return (
            <View style={styles.imageViewerContainer}>
                <View style={styles.imageContainer}>
                    <FlatList
                        data={this.state.imageList}
                        numColumns={2}
                        renderItem={({item}) => (
                            <Image style={styles.image} source={{uri: item.filePath}} />
                        )}
                        keyExtractor={item => item.id}
                    />
                    <View style={styles.buttonContainer}>
                        <Button onPress={this._onPress} title="Upload" color="#FFFFFF" accessibilityLabel="Tap on Me" />
                    </View>
                </View>
            </View>
        );
    }
}
