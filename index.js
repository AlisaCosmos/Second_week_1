/**
 * @param {String} tweet
 * @returns {String[]}
 */

module.exports = function (tweet) {

    // Заводим переменную под найденные хэштеги
    var result = [];

    // Разбиваем строку на массив слов
    // Результат запишем в массив arrayOfStrings

    var arrayOfStrings = tweet.split(' ');

    //В полученном массиве найдем все твиты (Для этого смотрит на первый символ, у хэштега он должен быть решеткой)

    for (var i = 0; i < arrayOfStrings.length; i++) {
            var tweets = arrayOfStrings[i];

    // Проверяем, является ли слово хэштегом

                if (tweets[0]=="#"){
                    result.push(tweets.slice(1));
                }
    }
    console.log("Массив result содержит " + result+ ", его размер = "+result.length);

    // Возвращаем результат из функции
    return result;

};

