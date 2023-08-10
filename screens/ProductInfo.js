import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProductInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.popularItemsContainer}>
                <Text style={styles.popularItemsHeading}>Italian Hot Pizza</Text>
                <View style={styles.popularItem}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../data/img.jpg')} // Replace with the actual image path
                        resizeMode="cover"
                    />
                    {/* <Text style={styles.productName}>My name is Burger</Text> */}
                    <TouchableOpacity style={styles.addToCartButton} >
                        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                    </TouchableOpacity>
                    <Image
                        style={styles.likeButton}
                        source={require('../data/heart.png')}
                        resizeMode="cover"
                    />
                </View>
            </View>
            <View style={styles.productDetails} >
                <Text style={styles.productItemsHeading}>Details</Text>
                <Text style={styles.productItemsDetails}>Pizza is a dish of Italian origin consisting of a usually round,
                    flat base of leavened wheat-based dough topped .</Text>
            </View>

            <View style={styles.ingredients}>
                <Text style={styles.ingredientsHeading}>Add Extra Ingredients</Text>
                <View style={styles.ingreDetails}>
                    <View style={styles.ingreDetailsImage}>
                    <Image
                        style={styles.imageIngredient}
                        source={require('../data/img.jpg')} 
                    />
                    </View>
                    <View style={styles.ingreDetailsHeading}>
                    <View style={styles.ingreDetailsNmae}>
                        <Text style={styles.ingreText}>Tomato</Text>
                    </View>
                    <View style={styles.ingreDetailsAmount}>
                        <Text style={styles.ingreText}>10 Rs</Text>
                    </View>
                    </View>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 17,
        borderWidth: 2,
    },
    popularItemsContainer: {
        borderWidth: 2,
        // flexDirection: 'row',
        marginBottom: 10,
    },
    popularItemsHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '1%',
        color: 'black',
        marginBottom: '5%',
    },
    popularItem: {
        // borderWidth: 3,
        padding: 3,
    },
    productName: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    addToCartButton: {
        backgroundColor: 'white',
        margin: 5,
        position: "absolute",
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 50,
        top: '80%',
        left: '6%',
    },
    likeButton: {
        height: '8%',
        width: '10%',
        position: "absolute",
        top: '85%',
        left: '79%',
        tintColor: 'white',
    },
    addToCartButtonText: {
        color: 'black',
        fontSize: 16,
    },
    imageStyle: {
        width: '100%',
        height: 320,
        borderRadius: 20,
    },

    productDetails: {
        flex: 1,
        borderWidth: 2,
        marginBottom: 10,
    },
    productItemsHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '1%',
        color: 'black',
    },
    productItemsDetails: {
        fontSize: 18,
        // fontWeight: 'bold',
        color: 'black',
        // marginBottom: 10,
    },
    ingredients: {
        flex: 1,
        borderWidth: 2,
        marginBottom: 10,
    },
    ingredientsHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '1%',
        color: 'black',
    },
    ingreDetails: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent:'space-between',
        borderWidth: 2,
        borderColor: 'red',
    },
    ingreDetailsImage:{
        flex: 1,
        borderWidth: 2,
        justifyContent: 'center',
    },
    ingreDetailsHeading:{
        flex: 2.5,
        borderWidth: 2,
    },
    ingreDetailsNmae:{
        flex: 1,
        borderWidth: 2,
    },
    ingreDetailsAmount:{
        flex: 1,
        borderWidth: 2,
    },
    imageIngredient: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },
    ingreText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});
export default ProductInfo;