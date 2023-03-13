const {deterministicPartitionKey} = require("./dpk");
const dotenv = require('dotenv');

dotenv.config();
console.log(deterministicPartitionKey());
