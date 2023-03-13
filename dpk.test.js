const {deterministicPartitionKey} = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {

    let event;
    let candidate;

    it("should return sha3-512 hash of event if no partitionkey provided", () => {
        candidate = deterministicPartitionKey("some-value");
        expect(candidate).toBe(crypto.createHash("sha3-512").update(JSON.stringify("some-value")).digest("hex"));
    });

    it('should return the given partition key', () => {
        event = {partitionKey: 'samplekey'};
        const result = deterministicPartitionKey(event);
        expect(result).toEqual('samplekey');
    });

    it("Returns the literal '0' when given no input", () => {
        const trivialKey = deterministicPartitionKey();
        expect(trivialKey).toBe(process.env.TRIVIAL_PARTITION_KEY);
    });

});
