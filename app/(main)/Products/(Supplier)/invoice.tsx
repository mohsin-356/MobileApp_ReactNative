import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

const InvoiceComponent = () => {
    const navigation = useNavigation();

    const cartItems = [
        { id: '1', name: 'Minimalist Cap', quantity: 1, price: 200 },
        { id: '2', name: 'Modern Chair', quantity: 2, price: 1500 },
        { id: '3', name: 'Premium Headphones', quantity: 1, price: 3000 },
    ];

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const calculateTax = (total:any) => {
        return total * 0.18; // 18% GST
    };

    const totalAmount = calculateTotal();
    const taxAmount = calculateTax(totalAmount);
    const grandTotal = totalAmount + taxAmount;

    const invoiceNumber = `INV-${Math.floor(Math.random() * 10000)}`;
    const invoiceDate = new Date().toLocaleDateString();
    const supplierAddress = '123 Street, City, State';
    const supplierEmail = 'supplier@example.com';

    const generatePDF = async () => {
        const htmlContent = `
        <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                        color: #333;
                    }
                    h1 {
                        text-align: center;
                        color: #007AFF;
                    }
                    p, th, td {
                        font-size: 14px;
                        line-height: 1.6;
                    }
                    .invoice-header, .invoice-footer {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .invoice-header strong {
                        font-size: 18px;
                        color: #007AFF;
                    }
                    .table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    .table th, .table td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: left;
                    }
                    .table th {
                        background-color: #f4f4f4;
                        font-weight: bold;
                    }
                    .summary {
                        margin-top: 20px;
                        font-size: 16px;
                    }
                    .summary p {
                        margin: 4px 0;
                    }
                    .total {
                        font-weight: bold;
                        color: #007AFF;
                    }
                </style>
            </head>
            <body>
                <div class="invoice-header">
                    <h1>Invoice</h1>
                    <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
                    <p><strong>Date:</strong> ${invoiceDate}</p>
                </div>
                <div>
                    <p><strong>Supplier Address:</strong> ${supplierAddress}</p>
                    <p><strong>Supplier Email:</strong> ${supplierEmail}</p>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cartItems
                .map(
                    (item) =>
                        `<tr>
                                        <td>${item.name}</td>
                                        <td>${item.quantity}</td>
                                        <td>₹${item.price}</td>
                                        <td>₹${item.price * item.quantity}</td>
                                    </tr>`
                )
                .join('')}
                    </tbody>
                </table>
                <div class="summary">
                    <p><strong>Subtotal:</strong> ₹${totalAmount}</p>
                    <p><strong>GST (18%):</strong> ₹${taxAmount.toFixed(2)}</p>
                    <p class="total"><strong>Grand Total:</strong> ₹${grandTotal.toFixed(2)}</p>
                </div>
                <div class="invoice-footer">
                    <p>Thank you for your business!</p>
                </div>
            </body>
        </html>
    `;

        try {
            const { uri } = await Print.printToFileAsync({ html: htmlContent });
            Alert.alert('PDF Generated', `PDF saved at: ${uri}`);

            // Check if sharing is available
            if (await Sharing.isAvailableAsync()) {
                await Sharing.shareAsync(uri);
            } else {
                Alert.alert('Error', 'Sharing is not available on this device.');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to generate PDF. Please try again.');
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Invoice Details</Text>
            <View style={styles.summaryContainer}>
                <Text style={styles.text}>Invoice Number: {invoiceNumber}</Text>
                <Text style={styles.text}>Date: {invoiceDate}</Text>
                <Text style={styles.text}>Supplier Address: {supplierAddress}</Text>
                <Text style={styles.text}>Supplier Email: {supplierEmail}</Text>
                <Text style={styles.text}>Subtotal: ₹{totalAmount}</Text>
                <Text style={styles.text}>GST (18%): ₹{taxAmount.toFixed(2)}</Text>
                <Text style={styles.text}>Grand Total: ₹{grandTotal.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={generatePDF}>
                <Text style={styles.buttonText}>Download & Share Invoice</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.backButton]}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Back to Orders</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    summaryContainer: {
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        width: '80%',
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: '#DDDDDD',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default InvoiceComponent;
