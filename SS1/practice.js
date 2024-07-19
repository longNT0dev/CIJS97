// Bài 1
const squareNumber = (num) => {
    if(typeof num !== 'number') {
        console.log(`${num} không phải là 1 số`);
        return
    } 
    console.log(`Bình phương của số ${num} là: ${num ** 2}`)
}

squareNumber("ffdfdfdf")
squareNumber(5)

// Bài 2
const isContainsStr = (originStr, searchStr) => {
    // truthy: 1, "df",.. -> true
    // falsy: 0, "", null, undefined -> false
    if(!originStr || !searchStr) {
        console.log("Chuỗi string ban đầu hoặc chuỗi string cần tìm không được rỗng");
    }

    const isContain = originStr.includes(searchStr)

    if(isContain) {
        console.log(`Chuỗi ${searchStr} có tồn tại bên trong chuỗi ${originStr}`)
    } else {
        console.log(`Chuỗi ${searchStr} không tồn tại bên trong chuỗi ${originStr}`)
    }
}

isContainsStr("Nguyễn Thành Long", "Lon")

// Bài 3

const addPrefixStr = (strs, prefix) => {

    if(!Array.isArray(strs)) {
        console.log("Vui lòng nhập vào 1 mảng string muốn thêm prefix")
        return 
    }

    if(!prefix) {
        console.log("Prefix không được để trống")
        return 
    }

    let prefixArr = []
    for(let i = 0 ; i < strs.length; i++) {
        prefixArr.push(`${prefix} ${strs[i]}`)
    }

    console.log("Mảng mới sau khi thêm prefix là: ", prefixArr);
}


addPrefixStr(["1", "2", "3"], "STT:")
addPrefixStr(["1", "2", "3"], "")