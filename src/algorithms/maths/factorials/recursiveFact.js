function recursiveFact(num) {
    if (num < 1) return 1;
    return num * recursiveFact(num - 1);
}
export default recursiveFact