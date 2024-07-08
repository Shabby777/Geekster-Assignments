const axios = require('axios');
const cheerio = require('cheerio');
const ExcelJS = require('exceljs');

const url = 'https://example-ecommerce-website.com/';

async function scrapeProductData() {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        // To hold product data
        let products = [];

        // Select and loop through each product element on the page
        $('.product-item').each((index, element) => {
            const product = {};

            // Extract product details
            product.name = $(element).find('.product-title').text().trim();
            product.price = $(element).find('.product-price').text().trim();
            product.availability = $(element).find('.product-availability').text().trim();
            product.rating = $(element).find('.product-rating').text().trim();

            // Add the product to the array
            products.push(product);
        });

        // Create a new workbook and worksheet
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Products');

        // Add column headers
        worksheet.columns = [
            { header: 'Product Name', key: 'name', width: 30 },
            { header: 'Price', key: 'price', width: 15 },
            { header: 'Availability', key: 'availability', width: 20 },
            { header: 'Rating', key: 'rating', width: 15 }
        ];

        // Add rows with product data
        products.forEach(product => {
            worksheet.addRow(product);
        });

        // Write the data to an Excel file
        await workbook.xlsx.writeFile('products.xlsx');
        console.log('Product data scraped and saved to products.xlsx');
    } catch (error) {
        console.error('Error scraping product data:', error);
    }
}

scrapeProductData();