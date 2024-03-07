import styled from "styled-components";

const BackgroundGradients = () => {
    return (
        <Wrapper>
            <header>
                <h1 className="site-title">Creative Section Shapes</h1>
            </header>

            <section>
                <div className="wrapper">
                    <h2 className="section-title"></h2>
                    <p>here is some text and other shit like that here is some text and other shit like that here is some text and other shit like that here is some text and other shit like that</p>
                </div>
            </section>

            <section className="diagonal">
                <div className="wrapper">
                    <h2 className="section-title">Diagonal</h2>
                    <p>here is some text and other shit like that here is some text and other shit like that here is some text and other shit like that here is some text and other shit like that</p>
                </div>
            </section>

            <section>
                <div className="wrapper">
                    <h2 className="section-title">Some Content Here</h2>
                    <p>here is some text and other shit like that here is some text and other shit like that here is some text and other shit like that here is some text and other shit like that</p>
                </div>
            </section>

            <section className="spikes">
                <div className="wrapper">
                    <h2 className="section-title">Spikes</h2>
                    <p>here is some text and other shit like that here is some text and other shit like that here is some text and other shit like that here is some text and other shit like that</p>
                </div>
            </section>

            <section>
                <div className="wrapper">
                    <h2 className="section-title"></h2>
                    <p>here is some text and other shit like that here is some text and other shit like that here is some text and other shit like that here is some text and other shit like that</p>
                </div>
            </section>

            <section className="wavy">
                <div className="wrapper">
                    <h2 className="section-title">wavy</h2>
                    <p>here is some text and other shit like that here is some text and other shit like that here is some text and other shit like that here is some text and other shit like that</p>
                </div>
            </section>

            <section>
                <div className="wrapper">
                    <h2 className="section-title"></h2>
                    <p>here is some text and other shit like that here is some text and other shit like that here is some text and other shit like that here is some text and other shit like that</p>
                </div>
            </section>
        </Wrapper>

    )

}

const Wrapper = styled.main`

--body-bg: hsl(0, 0%, 13%);

*, *::before, *::after{box-sizing:border-box;}

/* works if the user agent is in dark mode */
color-scheme: dark light;

background-color:var(--body-bg);
color:white;
margin:0;
font-family:system-ui;
font-size:1.25rem;
line-height:1.5; /* default line height is bit tight */

.wrapper{
max-width:50rem;
margin-right:auto;
margin-left:auto;

/* ensures gap on small screens */
padding-inline:1rem;
}

.site-title{
font-size:3rem;
text-align:center;
}

.section-title{
font-size:2.25rem;
}

section{
/* top and bottom padding */
padding-block: 5rem;
}

.diagonal{
/* custom variable */
--skew-angle:-5deg;
--background:linear-gradient(45deg, #12c2e9, #c471ed, #764759);

position:relative;

/* z-index of children is only realative to this element */
isolation:isolate;

}

.diagonal::after{
content:'';
background: var(--background);
position:absolute;

/* short for top left bottom right */
inset:0;
z-index:-1;

transform:skewY(var(--skew-angle));
}

.spikes{
--spike-color: var(--body-bg);
--spike-width:10px;
--spike-height:50px;
position:relative;
background:linear-gradient(to right, #fdc830, #f37335);
}

.spikes::before, .spikes::after{
content:'';
position:absolute;
/* position absolute removes the default width */
width:100%;
height:var(--spike-height);
background:var(--spike-color);

/* CORS error */
-webkit-mask-image:url('./src/assets/svgs/triangle.svg');
-webkit-mask-size: var(--spike-width) var(--spike-height);
}

.spikes::before{
top:0;
}

.spikes::after{
bottom:0;
transform:rotate(.5turn);
}

.wavy{
background: linear-gradient(to right, #00f260, #0575e6);

/* https://css-generators.com/ */
  --mask:
    radial-gradient(34.99px at 50% 48.00px,#000 99%,#0000 101%) calc(50% - 60px) 0/120px 51% repeat-x,
    radial-gradient(34.99px at 50% -18px,#0000 99%,#000 101%) 50% 30px/120px calc(51% - 30px) repeat-x,
    radial-gradient(34.99px at 50% calc(100% - 48.00px),#000 99%,#0000 101%) calc(50% - 60px) 100%/120px 51% repeat-x,
    radial-gradient(34.99px at 50% calc(100% + 18.00px),#0000 99%,#000 101%) 50% calc(100% - 30px)/120px calc(51% - 30px) repeat-x;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}
`;

export default BackgroundGradients;