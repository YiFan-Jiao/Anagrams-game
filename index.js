'use strict'

let lists = ['earth', 'hater', 'heart', 'herat', 'land', 'part', 'prat', 
'pearl', 'power', 'rapt', 'raptor', 'rathe', 'tarp', 'tradition', 'trap', 
'tramp', 'tour'];

function makeBox(list) {
    let box = {};

    list.forEach(element => {
        let boxKey = element.split('').sort().join('');
        
        if(!box[boxKey]) {
            box[boxKey] = [];
        } else {
            box[boxKey] = box[boxKey];
        }

        box[boxKey].push(element);
    }); 

    Object.values(box).forEach(element => {
        if (element.length !== 1)
            console.log(element);
    });

}
makeBox(lists)
//console.log(makeBox(lists));
console.log();