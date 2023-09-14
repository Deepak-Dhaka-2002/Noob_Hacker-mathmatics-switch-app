document.getElementById('calculate').addEventListener('click', function () {
    var list = document.getElementById('main-input').value;
    list = list.replaceAll(' ', '');
    list = list.split(',');

    list = list.map((item, index) => {
        return parseInt(item);
    })

    var operator = document.getElementById('operator').value;


    switch (operator) {
        case 'sum':
            var sum = 0;
            for (var i = 0; i < list.length; i++) {
                sum += parseInt(list[i]);
            }
            document.getElementById('output').innerHTML = sum;
            break;
        case 'average':
            var sum = 0;
            for (var i = 0; i < list.length; i++) {
                sum += parseInt(list[i]);
            }
            document.getElementById('output').innerHTML = sum / list.length;
            break;

        case 'min':
            var min = list[0];
            for (var i = 0; i < list.length; i++) {
                if (list[i] < min) {
                    min = list[i];
                }
            }
            document.getElementById('output').innerHTML = min;
            break;

        case 'max':
            var max = list[0];
            for (var i = 0; i < list.length; i++) {
                if (list[i] > max) {
                    max = list[i];
                }
            }
            document.getElementById('output').innerHTML = max;
            break;

        case 'median':
            for (var i = 0; i < list.length; i++) {
                for (var j = 0; j < list.length; j++) {
                    if (list[i] < list[j]) {
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
                }
            }
            // get median
            var median = 0;
            if (list.length % 2 == 0) {
                median = (list[list.length / 2] + list[(list.length / 2) - 1]) / 2;
            } else {
                median = list[Math.floor(list.length / 2)];
            }
            document.getElementById('output').innerHTML = median;
            break;

       case 'mode':
            var object = {}
            for (var i = 0; i < list.length; i++) {
                if (object[list[i]]) {
                    // increment existing key's value
                    object[list[i]] += 1
                } else {
                    // make a new key and set its value to 1
                    object[list[i]] = 1
                }
            }
            // assign a value guaranteed to be smaller than any number in the list
            var biggestValue = -1
            var biggestValuesKey = -1
   
            Object.keys(object).forEach(key => {
                var value = object[key]
                if (value > biggestValue) {
                    biggestValue = value
                    biggestValuesKey = key
                }
            })
            document.getElementById('output').innerHTML = biggestValuesKey;
            break;

        case 'range':
            var min = list[0];
            var max = list[0];
            for (var i = 0; i < list.length; i++) {
                if (list[i] < min) {
                    min = list[i];
                }
                if (list[i] > max) {
                    max = list[i];
                }
            }
            document.getElementById('output').innerHTML = max - min;
            break;
        default:
            document.getElementById('output').innerHTML = 'Invalid operator';
            break
    }

})
