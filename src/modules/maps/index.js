import React, { useState } from "react";
import {
    StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';
import shared from "../../shared";
export default () => {
    const [showLoader, setShowLoader] = useState(false)
    const setLoaderStart = () => {
        setShowLoader(true)
    }

    const setLoaderEnd = () => {
        setTimeout(() => {
            setShowLoader(false)
        }, 3000);
    }
    return (
        <>
            {showLoader && <shared.Loader/>}
            <WebView
                onLoadStart={setLoaderStart}
                onLoadEnd={setLoaderEnd}
                startInLoadingState
                style={styles.container}
                source={{ uri: 'https://arcg.is/1GfS5r1' }} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})