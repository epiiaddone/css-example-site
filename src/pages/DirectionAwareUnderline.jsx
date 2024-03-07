import styled from "styled-components";

const DirectionAwareUnderline = () => {
    return (
        <Wrapper>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
            </nav>
        </Wrapper>
    )
}


const Wrapper = styled.main`

color-scheme:dark;
font-family:system-ui;
font-size:2.25rem;
display:grid;
min-block-size:100dvh;
place-content:center;


nav ul{
--_gap:2rem;
display:flex;
margin:0;
padding:0;
list-style:none;
}


nav a{
color:inherit;
opacity:0.7;
text-decoration:none;
text-transform:uppercase;
font-weight:500;
position:relative;
}

a:hover,
a:focus-visible{
opacity:1;
}


nav li{
overflow:hidden;
position:relative;
padding: calc(var(--_gap)/2);
}

nav li::after{
content:"";
position:absolute;
left:0;
bottom:0rem;
height:3px;
width:100%;
background: orangered;

translate: var(--_translate, 0);

/* dilate factor x y */
scale: var(--_width, 0) 1;
transition:
	scale 300ms var(--_scale-delay, 0ms),
	translate 500ms var(--_translate-delay, 0ms);
}

nav li:hover,
nav li:focus-within{
--_width:1;
}

/* h1 is not important, you could put anything there */
@supports selector(:has(h1)){
nav li:hover + li{
	--_translate: -100%;
	--_scale-delay:300ms;
	--_translate-delay:200ms;
}

/* select li that is before a sibling with hover. This sort of selecting a previous element was not possible before has */
nav li:has(+ :hover){
	--_translate:100%;
	--_scale-delay:300ms;
	--_translate-delay:200ms;
}
}
`;

export default DirectionAwareUnderline;