## Anagrams game

Anagrams-gameplay, a small function written by js, finds all the words that are made up of the same letter from a set of arrays. At the beginning I want to use ```array```s, and when I write it more and more difficult, and then I start to try the ```object```, the benefit of the object is that the same ```key``` can save a lot of different ```values```. This makes the problem easy.

## Code

First we need to put all the letters of the words in order so that the words made up of the same letters become the same ```string```.
```javascript
list.forEach(element => {
        let boxKey = element.split('').sort().join('');
```

And then we have a string as a ```key```, and we add each word to the same ```key```. When the ```key``` is the same, they will appear in the same ```Key-value pair```. This completes the classification.
```javascript
if(!box[boxKey]) {
            box[boxKey] = [];
        } else {
            box[boxKey] = box[boxKey];
        }

        box[boxKey].push(element);
```

Finally, we only need to output the ```length``` of each key ```value``` greater than one, we can get the desired result, complete the anagrams game
```javascript
Object.values(box).forEach(element => {
        if (element.length !== 1)
            console.log(element);
```
