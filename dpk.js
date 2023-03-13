const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
    const TRIVIAL_PARTITION_KEY = process.env.TRIVIAL_PARTITION_KEY;
    const MAX_PARTITION_KEY_LENGTH = process.env.MAX_PARTITION_KEY_LENGTH;
    let candidate;

    if (event) {
        candidate = event.partitionKey || crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    }

    if (candidate) {
        if (typeof candidate !== "string") {
            candidate = JSON.stringify(candidate);
        }
        if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
            candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
        }
    } else {
        candidate = TRIVIAL_PARTITION_KEY;
    }
    return candidate;
};
