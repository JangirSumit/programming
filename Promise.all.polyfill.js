Promise.myall = function (values) {
    const promise = new Promise(function (resolve, reject) {
        let result = [];
        let total = 0;
        values.forEach((item, index) => {
            Promise.resolve(item).then((res) => {
                result[index] = res;
                total++;
                if (total === values.length)
                    resolve(result);
            }).
                catch((err) => {
                    reject(err);
                })
        })
    })
    return promise
}