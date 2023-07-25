const mongoose = require('mongoose');

async function main() {
    mongoose.connect('mongodb://localhost:27017/testdb');
    mongoose.connection.on('connected', () => console.log('Connected to MongoDB!'));
    mongoose.connection.on('reconnected', () => console.log('MongoDB reconnected!'));
    mongoose.connection.on('error', (err) => {
        console.log(`Error in MongoDb connection: ${err}`);
        mongoose.disconnect();
    });
    mongoose.connection.on('disconnected', () => {
        console.error(`MongoDB disconnected! Reconnecting in ${30000 / 1000}s...`);
        setTimeout(() => connectToMongo(), 30000);
    });

    const ProductSchema = new mongoose.Schema({
        name: { type: String, require: true },
        price: { type: Number, require: true },
    });

    const ProductModel = mongoose.model('Product', ProductSchema);

    const newProduct = new ProductModel({ name: 'Hang Gia', price: 41 });

    // await newProduct.save();

    await ProductModel.create({ name: 'Hang Gia', price: 10 });

    const schema = new mongoose.Schema({ name: String, size: String });
    const Tank = mongoose.model('Tank', schema);

    const small = new Tank({ size: 'small' });
    await small.save();
    console.log(done);
}

main();
