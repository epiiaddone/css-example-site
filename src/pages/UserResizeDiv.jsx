import styled from "styled-components";

const UserResizeDiv = () => {

    return (
        <Wrapper>
            <div class="resize_div">This is a div that the user can resize with their pointer</div>
        </Wrapper>
    )
}


const Wrapper = styled.main`

min-height:100vh;
display:grid;
place-content: center;

.resize_div{
resize:both;
border: 1px solid black;

/* this is necessary */
overflow: auto;

/* the default resize button is very small */
background-image:linear-gradient(-45deg, gray 20px, transparent 20px);
}
`;

export default UserResizeDiv;