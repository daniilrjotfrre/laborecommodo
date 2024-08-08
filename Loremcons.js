function setTimeoutValue(timeout) {
    if (timeout > 0) {
        console.log(`Timeout set to ${timeout} seconds`);
    } else {
        throw new Error("Timeout must be a positive number greater than zero.");
    }
}

// Example usage
try {
    setTimeoutValue(5);     // This is valid
    setTimeoutValue(2.5);   // This is valid
    setTimeoutValue(-1);    // This will throw an error
    setTimeoutValue(0);     // This will also throw an error
} catch (error) {
    console.error(error.message);
}
