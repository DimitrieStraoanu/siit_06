function elementIdentic(arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        if(arr[i] !== arr[i+1]) {
            return false;
        }
    }
    return true;
}
elementIdentic([4,6,8,9,10]);