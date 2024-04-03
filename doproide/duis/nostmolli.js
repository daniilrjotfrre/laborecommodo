function animate(timestamp) {
    // do something with the timestamp if needed

    // Request the next frame
    requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);
