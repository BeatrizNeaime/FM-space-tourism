# Front-end Mentor - Space Tourism Challenge

## The challenge

The challenge is: built a responsive website to a space travel agency.

## My solution

### Technologies

Built with React.js + Styled-Components.

### States and Contexts

The actual view is stored in a context, every single item such as `Crew` or `Destination` have they own context at `hooks/[contextName]`.

### Data

The information about the destinations, crew and technologies cam be found at `hooks/[name]Info.js`. At this file, I built an object of objects to make easier to deal with views changes. This way I can access the data I need just calling the object.
e.g.: if I need moon distance:

```js
destinationInfo['moon'].distance
```

But actually, with contexts, it works like:

```js
const { destination } = useContext(destinationContext); 

<DestinationName>
    {destinationInfo[destination].name}
</DestinationName>
```

Now, everytime I click a new destination, the view instantly changes to the selected one.

## To do

- [x] Build homepage
- [x] Build Destination page
- [ ] Style the Destination title
- [ ] Finish Crew page
- [ ] Start bulding Technologies page
- [ ] Turn it responsible
- [ ] (maybe) add image transitions
