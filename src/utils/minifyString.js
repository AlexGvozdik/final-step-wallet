const minifyString = (string, maxVisible) => {
    if (string.length < maxVisible) {
        return string
    }
    return string.slice(0, maxVisible).padEnd(maxVisible + 5, '.')
}

export default minifyString
