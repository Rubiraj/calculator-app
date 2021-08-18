function operation_result(a, b, operation) {
    var result = {
        '+': a + b,
        '-': a - b,
        '*': a * b,
        '/': a / b
        }

return result[operation]
}
export default operation_result