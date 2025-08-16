# Notes from script.js
1. `getElementById()` only selects a singular element of specified id
2. `document.QuerySelector()` selects first occurence of specified CSS selector
3. `document.querySelectorAll()` returns a NodeList which is array like and can be looped through/index accessed
4. `output.innerHTML = ' ' ` allows you to get or set the HTML content inside an element
5. classList is a JS property that allows you to add remove classes or attributes from a tag, for example removing class="hide" from a displayed tag
6. When you set a vaiable to the value of a .getElementById you are saving a reference to a DOM element including properties. Like grabbing the whole tag and its content.
7. `.insertAdjacentHTML(position, htmlString)` allows you to insert HTML without replacing the existing content where position can be (beforebegin, beforeend, etc)

## Regular expressions
1. All regular expressions must be delimitted, `regex = /   /`
2. using the `g` tag after the last `/` globally searches for the specified patter or characters even after potentially finding it once
3. `/[  ]/` is a character set that tries to match any one character inside the brackets so [abc] searches for "a", "b", or "c"
4. `^` denotes except, ^a searches for any character accept "a"
5. `/s` denotes spaces, `/d` denotes any digit
6. `str.replace(regex, '')` replaces anything found in str that is in regex with empty string (removes from str)
7. `/i` adding i flag makes the regex case-insensitive, uppercase or lowercase letters
8. putting a string inside `` allows for variables to be input into the string using ${}
