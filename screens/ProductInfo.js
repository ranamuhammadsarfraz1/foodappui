import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

const ingredientsData = [
    { name: 'Tomato', amount: '10 Rs' },
    { name: 'Cheese', amount: '15 Rs' },
    {name: 'Pineapple', amount: '30 Rs'}
    
];

const ProductInfo = () => {
    const [isLiked, setIsLiked] = React.useState(false);
    const [selectedIngredients, setSelectedIngredients] = React.useState([]);

    const toggleIngredient = (ingredientName) => {
        if (selectedIngredients.includes(ingredientName)) {
            setSelectedIngredients(selectedIngredients.filter(item => item !== ingredientName));
        } else {
            setSelectedIngredients([...selectedIngredients, ingredientName]);
        }
    };

    const renderIngredientItem = ({ item }) => (
        <View style={styles.ingreDetails}>
            <View style={styles.ingreDetailsImage}>
                <Image
                    style={styles.imageIngredient}
                    source={require('../data/img.jpg')}
                />
            </View>
            <View style={styles.ingreDetailsInfo}>
                <View style={styles.ingreDetailsRow}>
                    <Text style={styles.ingreName}>{item.name}</Text>
                    <TouchableOpacity
                        onPress={() => toggleIngredient(item.name)}
                        style={styles.checkbox}
                    >
                        {selectedIngredients.includes(item.name) ? (
                            <Image
                                source={require('../data/check-mark.png')}
                                style={styles.checkIcon}
                            />
                        ) : null}
                    </TouchableOpacity>
                </View>
                <Text style={styles.ingreAmount}>{item.amount}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.popularItemsContainer}>
                <Text style={styles.popularItemsHeading}>Italian Hot Pizza</Text>
                <View style={styles.popularItem}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../data/img.jpg')}
                        resizeMode="cover"
                    />
                    <TouchableOpacity
                        style={styles.likeButton}
                        onPress={() => setIsLiked(!isLiked)}
                    >
                        <Image
                            style={styles.likeIcon}
                            source={
                                isLiked
                                    ? require('../data/heartFill.png')
                                    : require('../data/heart.png')
                            }
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.productDetails}>
                <Text style={styles.productItemsHeading}>Details</Text>
                <Text style={styles.productItemsDetails}>
                    Pizza is a dish of Italian origin consisting of a usually round,
                    flat base of leavened wheat-based dough topped.
                </Text>
            </View>
            <View style={styles.ingredients}>
                <Text style={styles.ingredientsHeading}>Add Extra Ingredients</Text>
                <FlatList
                    data={ingredientsData}
                    renderItem={renderIngredientItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    popularItemsContainer: {
        marginBottom: 20,
    },
    popularItemsHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    popularItem: {
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3,
        backgroundColor: 'white',
    },
    imageStyle: {
        width: '100%',
        height: 350,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    addToCartButton: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: '35%',
        margin: 10,
        alignSelf: 'center',
    },
    addToCartButtonText: {
        color: 'white',
        fontSize: 16,
    },
    likeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    likeIcon: {
        width: 24,
        height: 24,
        tintColor: '#ffba00',
    },
    productDetails: {
        marginBottom: 20,
    },
    productItemsHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    productItemsDetails: {
        fontSize: 16,
        color: '#666',
    },
    ingredients: {
        marginBottom: 20,
    },
    ingredientsHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    ingreDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    ingreDetailsImage: {
        marginRight: 10,
    },
    imageIngredient: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    ingreDetailsInfo: {
        flex: 1,
    },
    ingreName: {
        fontSize: 18,
        color: '#333',
        marginBottom: 5,
    },
    ingreAmount: {
        fontSize: 16,
        color: '#666',
    },
    ingreDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        borderRadius: 4,
    },
    checkIcon: {
        width: 16,
        height: 16,
        tintColor: '#333',
    },
});

export default ProductInfo;