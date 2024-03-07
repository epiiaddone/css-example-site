import styled from "styled-components";

const FooterSmallContent = () => {
    return (
        <Wrapper>
            <div class="content">
                <h1 class="header">This is the header</h1>
                <p class="paragraph">this is a short pharagraph</p>
                <div class="footer">This is the footer</div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.main`


/* browser adds some margin by default */
margin:0;


.footer{
background-color:teal;
}

.content{
/*this can be a problem for mobile devices when there are popups */
min-height:100vh;

/* this does not have full browser support */
min-height:100dvh;

display:grid;
grid-template-rows: auto 1fr auto;

}

.header{
background-color:red;
}

.paragraph{
background-color:black;
color:white;
}
`;


export default FooterSmallContent;