export default function connection(mongoose, connectionString, options) {
	function useMongoDb() {
		mongoose
			.connect(connectionString, options)
			.then(
				() => {},
				(err) => {
					console.info('Mongo error: ', err);
				}
			)
			.catch((err) => {
				console.log('ERROR: ', err);
			});
	}

	mongoose.connection.on('connected', () => {
		console.log('Connected to MongoDB!');
	});

	mongoose.connection.on('reconnected', () => {
		console.log('MongoDB reconnected!');
	});

	mongoose.connection.on('error', (error) => {
		console.error(`Error in MongoDb connection: ${error}`);
		mongoose.disconnect();
	});

	mongoose.connection.on('disconnected', () => {
		console.error(`MongoDB disconnected! Reconnecting in ${options.reconnectInterval / 1000}s...`);
		setTimeout(() => connectToMongo(), options.reconnectInterval);
	});

	return {
		connectToMongo,
	};
}
