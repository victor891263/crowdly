module.exports = (content) => {
    return JSON.parse(JSON.stringify(content, null, 2))
}