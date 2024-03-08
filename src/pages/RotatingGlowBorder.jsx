import styled from "styled-components";

const RotatingGlowBorder = () => {

    return (
        <Wrapper>
            <div className="card"></div>
        </Wrapper>
    )


}

const Wrapper = styled.main`

/* declaring a global custom property gives the browser more information e.g. that it is an angle
this allows the broswer to know if the property in animatiable or not.  */
@property --gradient-angle{
syntax: "<angle>";
initial-value: 0deg;
inherits: false;
}

@keyframes rotation{
0% { --gradient-angle: 0deg;}
100% {--gradient-angle: 360deg;}
}


--clr-1: #052b2f;
--clr-2: #073438;
--clr-3: #0e4b50;
--clr-4: #2d8f85;
--clr-5: #637c54;



background: var(--clr-2);
min-height:100vh;
display:grid;
place-content: center;


.card{
height:60vh;
aspect-ratio: 1 / 1.5;
background: var(--clr-1);
border-radius:0.5rem;
position: relative; /* so sudo elements can use position:absolute */
}

.card::before,
.card::after {
content: "";
position:absolute;
inset:-0.5rem; /*overlap parent */
z-index:-1; /*this is hiding the overlap behind the wrapper div */
background: conic-gradient(
from var(--gradient-angle),
var(--clr-3),
var(--clr-4),
var(--clr-5),
var(--clr-4), /* loop back to make the conic gradient look consistant*/
var(--clr-3)
);
border-radius: inherit;
animation: rotation 3s linear infinite;
}

.card::after {
filter: blur(3.5rem); /*glowing effect */
}
`;

export default RotatingGlowBorder;