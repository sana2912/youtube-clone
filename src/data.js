const data_converter = function (view) {
    if (view >= 1000000) {
        return Math.floor(view / 1000000) + " ล้าน";
    }
    else if (view >= 1000) {
        return Math.floor(view / 1000) + " พัน";
    } else {
        return view;
    }
}

export { data_converter };



