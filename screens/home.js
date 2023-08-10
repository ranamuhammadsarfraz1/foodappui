import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <Image
                    style={styles.searchIcon}
                    source={require('../data/searchicon.png')}
                />
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search"

                />
                <TouchableOpacity style={styles.filterButton}>
                    {/* <Text style={styles.filterButtonText}>Filter</Text> */}
                    <Image
                        style={styles.searchIcon}
                        source={require('../data/iconeF.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.productItemsContainer}>
                <View style={styles.productItems}>
                    <View style={styles.productItemsDetails}>
                        <Image
                            style={styles.productImageStyle}
                            source={require('../data/img.jpg')}
                        />
                    </View>
                    <Text style={styles.productName}>Burger</Text>
                </View>

                <View style={styles.productItems}>
                    <View style={styles.productItemsDetails}>
                        <Image
                            style={styles.productImageStyle}
                            source={require('../data/img1.webp')}
                        />
                    </View>
                    <Text style={styles.productName}>Pizza</Text>
                </View>

                <View style={styles.productItems}>
                    <View style={styles.productItemsDetails}>
                        <Image
                            style={styles.productImageStyle}
                            source={require('../data/img.jpg')}
                        />
                    </View>
                    <Text style={styles.productName}>Burger</Text>
                </View>

                <View style={styles.productItems}>
                    <View style={styles.productItemsDetails}>
                        <Image
                            style={styles.productImageStyle}
                            source={require('../data/img.jpg')}
                        />
                    </View>
                    <Text style={styles.productName}>Burger</Text>
                </View>

                <View style={styles.productItems}>
                    <View style={styles.productItemsDetails}>
                        <Image
                            style={styles.productImageStyle}
                            source={require('../data/img1.webp')}
                        />
                    </View>
                    <Text style={styles.productName}>Pizza</Text>
                </View>
            </View>

            <View style={styles.popularItemsContainer}>
                <Text style={styles.popularItemsHeading}>Popular Items</Text>
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

            <View style={styles.popularItemsContainer}>
                <Text style={styles.popularItemsHeading}>Famous Items</Text>
                <View style={styles.popularItem}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../data/img.jpg')}
                        resizeMode="cover"
                    />

                    <TouchableOpacity style={styles.addToCartButton} >
                        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 17,
        backgroundColor: '#fff',
    },
    searchBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: .5,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#fff',
        elevation: 3,
        borderColor: 'gray',
    },
    searchBar: {
        flex: 1,
        height: 45,
        marginRight: 20,
    },
    searchIcon: {
        width: 30,
        height: 30,
        marginRight: 8,
    },
    filterButton: {
        paddingHorizontal: 3,
    },
    filterButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    productItemsContainer: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    productItems: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        width: '48%',
    },
    productItemsDetails: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: '#FAF8F8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImageStyle: {
        height: 35,
        width: 35,
        borderRadius: 40,
    },
    popularItemsContainer: {
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
        tintColor: 'green',
    },
    addToCartButtonText: {
        color: 'black',
        fontSize: 16,
    },
    imageStyle: {
        width: '95%',
        height: 380,
        borderRadius: 20,
    },
});

export default Home;
