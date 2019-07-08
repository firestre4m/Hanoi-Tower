
// const defaultDiscArray = [
// {loc:0, width:'20%', color:'#f3a9a5'}, 
// {loc:0, width:'40%', color:'#e5453d'}, 
// {loc:0, width:'80%', color:'#871812'}];

const preDefColors = [
    '#f3a9a5',
    '#e5453d',
    '#871812',
    '#5a100c',
    '#5a100c',
    '#430c09',
    '#2d0806',
]

const generateDiscs = (count) => {
    let DiscArray = [];

    for (let i=0; i < count; i++) {
        const newDisc = {loc:0, width:80 - 10 * (count - i).toString() + '%', color:preDefColors[i]};
        console.log(80 / (1/(i+1)));
        DiscArray.push(newDisc);
    }

    return DiscArray;
}
window.generateDiscs = generateDiscs;
export default generateDiscs;