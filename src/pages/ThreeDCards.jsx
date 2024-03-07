import styled from 'styled-components';

const ThreeDCards = () => {
    return (
        //this is for a css - only solution
        <Wrapper>
            <div className="pre-container">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <pre className="language-css" tabindex="0">
                    <code className="language-css">
                        <span className="token selector">.awesome-layout</span>
                        <span className="token punctuation">{`{
                            `}</span>
                        <span className="token property">display</span>
                        <span className="token punctuation">:</span>grid
                        <span className="token punctuation">;</span>
                        <span className="token punctuation">{`
                            }
                        `}
                        </span>
                    </code>
                </pre>
            </div>
        </Wrapper>
    )

}

const Wrapper = styled.main`

    --pink: hsl(338,70%,55%);
    --teal: hsl(183,70%,62%);
    --white: hsl(334,7%,95%);
    background: hsl(224, 32%, 12%);
    background-image: conic-gradient(
        from 0deg at 50% 50%,
        blue,
        purple,
        purple,
        blue
    );
    background-blend-mode: multiply;
    color:white;
    min-block-size:100dvh;
    display:grid;
    place-items:center;

    
*,*::before,*::after{
    box-sizing:border-box;
}


pre{
/* what is the scope of these? */
    --selector: var(--pink);
    --property: var(--teal);
    --punctuation: var(--white);

    font-size:2rem;
    font-weight:bold;
     background: hsl(222,45%,7%);
     padding:2rem;
     border-radius:1rem;

     /* so that ::after is positioned relative to this */
     position:relative;

     /* z-index of children also change */
     transform-style:preserve-3d;

     /*skew the box */
     transform:
     perspective(5000px) /* apparently trial and error to get this number correct */
     rotateY(var(--rotateY))
     rotateX(var(--rotateX));
}

.selector{
    color: var(--selector);
}

.property{
    color: var(--property);
}

.punctuation{
    color: var(--punctuation);
}

/* adjacent */
.property + .punctuation{
    color: var(--property);
}

pre > * {
    text-shadow: 0 0 0.3em currentColor;
}

pre::before,
pre::after{
    content:"";
    position:absolute;
    border-radius:inherit;
}

/*shadow effect*/
pre::before{
    inset:0.75rem;
    background:black;
    transform:translateZ(-49px);
    filter:blur(15px);
    opacity:0.5;
}

/* add in background */
pre::after{
/* bigger than the pre */
inset:-1rem;

background:linear-gradient(-45deg,red, blue);

/* move the bg behind the pre */
transform: translateZ(-50px);
}

/* below is the css only method */

/* divide the div into 3 rows and 3 cols */
.pre-container{
    position:relative;
    display:grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
}

pre{
    /* start a 1, end at -1 -- this means go all the way across */
    grid-row: 1 / -1;
    grid-column: 1 / -1;

    transition: transform 250ms ease;
}

.pre-container > div {
    z-index: 10;
    position:absolute;
}

.pre-container > div:nth-child(1){
    grid-column: 1/2;
    grid-row: 1/2;
    inset:0;
}

.pre-container > div:nth-child(2){
    grid-column: 2/3;
    grid-row: 1/2;
    inset:0;
}

.pre-container > div:nth-child(3){
    grid-column: 3/4;
    grid-row: 1/2;
    inset:0;
}

.pre-container > div:nth-child(4){
    grid-column: 1/2;
    grid-row: 2/3;
    inset:0;
}

.pre-container > div:nth-child(5){
    grid-column: 2/3;
    grid-row: 2/3;
    inset:0;
}

.pre-container > div:nth-child(6){
    grid-column: 3/4;
    grid-row: 2/3;
    inset:0;
}

.pre-container > div:nth-child(7){
    grid-column: 1/2;
    grid-row: 3/4;
    inset:0;
}

.pre-container > div:nth-child(8){
    grid-column: 2/3;
    grid-row: 3/4;
    inset:0;
}

.pre-container > div:nth-child(9){
    grid-column: 3/4;
    grid-row: 3/4;
    inset:0;
}

/* ~ tilde is the general sibling selector
e.g.
A ~ B
will select all B that are siblings of A,
that appear after A
 */
.pre-container > div:nth-child(1):hover ~ pre {
    --rotateX: 25deg;
    --rotateY: -25deg;
}

.pre-container > div:nth-child(2):hover ~ pre {
    --rotateX: 25deg;
    --rotateY: 0deg;
}

.pre-container > div:nth-child(3):hover ~ pre {
    --rotateX: 25deg;
    --rotateY: 25deg;
}

.pre-container > div:nth-child(4):hover ~ pre {
    --rotateX: 0deg;
    --rotateY: -25deg;
}

.pre-container > div:nth-child(5):hover ~ pre {
    --rotateX: 0deg;
    --rotateY: 0deg;
}

.pre-container > div:nth-child(6):hover ~ pre {
    --rotateX: 0deg;
    --rotateY: 25deg;
}

.pre-container > div:nth-child(7):hover ~ pre {
    --rotateX: -25deg;
    --rotateY: -25deg;
}

.pre-container > div:nth-child(8):hover ~ pre {
    --rotateX: -25deg;
    --rotateY: 0deg;
}

.pre-container > div:nth-child(9):hover ~ pre {
    --rotateX: -25deg;
    --rotateY: 25deg;
}
`;


export default ThreeDCards;