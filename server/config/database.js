const mongoose = require("mongoose");
require("dotenv").config();

// console.log("MongoDB URL ",process.env);
const { MONGODB_URL } = process.env;
console.log("MongoDB URL ",MONGODB_URL);

exports.connect = () => {
	mongoose
		.connect(process.env.MONGODB_URL, {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
