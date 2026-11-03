# my-snowglobe
#11pm,30 Oct 2026
what does <main> fis the core susbstance of my page. 
what does <section facilitate>
for styling the image  and moving it to align i need to box it in <div>
 Bug encountered- Not able to see the border on webpage for globe card section
 solution-
 i had to mention solid and not just the color

 notes
 -padding - pushes the border away from elemnt.
          -space inside border
 -margin- pushes other elements away from the border.
        -space outside border
-max-width - tells the screen the maximum limit for it to  grow wider.
observation - padding is pushing the elemnt upwards both horizontally and vertically by the unit written
 Bug encountered- The snowglobe image was leaning more on left side of globe card .
 solution- used max-width:fit-content; to make it in the center with margin:0 auto;

 doubt with what i did in maincause it didnt change naything
 flex direction:column-why use column?-
 
 31ST OCT 10:47am "you never know you love making games, until you make one'
 observation - align-items moves the objects vertically whereas justify-content helps move the elemnt horizontally in flex box
 and we mainly use these inputs:-
 1.flex-start
 2.flex-end
 3.center
 4.baseline/space-around
 5.strecth/space-between
 notes-
 flex-direction-is css property defining direction of items placed in container
 inputs in flex-direction-
 Rows(horizontal) & columns(vertical)
 rows-reverse or column-reverse changes the order making the last in line first.
 #notes-
 when we use reverse property with flex direction , normally the flex-start is for left but because of that it becomes right and flex end becomes left .but also u can use only justify-content:start for making it to left side.
 observation- when we use flex direction with align-items and justify-content, there roles are reversed as well justify-content changes to vertical and align-items to horizontal.

 notes-
 border-radius - helps rounds the corner (%)
 radial grdient:- is like a tool to add color round the circle.
 the first number infront of padding dictates the vertical width and the second number after it dictates or increases the horizontal height.
cursor pointer- turns into little hand for letting users understand its clickable button.
transition-helps with smooth transformation.
"transition: background 150 ms ease,transform 150ms ease;
here we are focusing on background color and transform size ,if either of them change it prevents it from snapping instantly and smoothly changing over 150ms.

bug encountered- the button wasnt changing color on hovering .
mistake- writing button:hover as button.hover
what is a keyframe?- it labels or names a animation .it has like steps to guide how u want to animate
#notes-
@keyframes shake 
  0%, 100% { transform: translateX(0) rotate(0deg); }here the 0 is the start and 100 is the end .

you mention the animation duration or length in .
deg stands for degree 0deg means its completely straight.
transalteX(0)-means the item isnt moving left or right on x axis.
translateY(0)-means the item isn't moving up or down on y axis.
positive number pushes it  right , negative pushes it left.
we require java script to do the animation on click.

#notes- .globe.shaking means : apply the shake animation only when an element has both class globe and clas shaking at the same time
body consists of - head, main and footer

1pm 31st oct 2026
#notes 
what is const - short for constant, in javascript its akeyword used to create variable to hold something.
document.querySelector() is java command used to find  and grab an elemnt from your html page so you can control it.

the three part of listner(sensor)
 we have to tell javascript
 who to watch?
 what action to wait for?- click, mouseover,keydown
 what to do when it happens - ()=> {..} - this is called the arrow function .
 what is classlist - this is how javascript reaches to css and checks all the classes of that element
 .add("shaking') changes the raw class string , now its active as globe and shaking class . as now shaking is attached the browser willlook at  css rule for.shaking and immediately starts vibrating the elemnt.
 

NOTES-
the square brackets in line 5 to12 create an array and the message class in html becomes the folder holding these texts.
since we want a new message to pop out everytime and not the same ones , lines 18 and 19 are a math trick used to pick one quote randomly from that foler and display it in yor html.

const pick= Math.floor(math.random() *messages.length);
this line acts like a digital dice roll. it generates a random list (index) and saves it into s temporary container called pick.
messages.length is the total nmbe of quotes which are to be multiplied ..and math.floor acts like  a round of machine for decimal number to find the inde round of nu. as indexs cant be saved in decimals.
message.textContent = messages[pick];- aids with grabbing and stamping the Text
.textContent acts like an eraser to wipe out old text and replace ut with newly selcted phrase. so without it it wont show anything 
button.addeventlistner and const pick had to be in same brackets as the image was supposed to shake while simultaenously the message were required to change on the clicking the button.
 THANKYOU-
