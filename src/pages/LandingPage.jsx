import { Link } from "react-router-dom";
import { link_data } from "../link-data";
import styled from "styled-components";

const LandingPage = () => {
    return (
        <Wrapper>
            {link_data.map(link => {
                return (
                    <div className="link" key={link.title}>
                        <Link to={link.url}>{link.title}</Link>
                        <a href={link.resource} target="_blank">Resource</a>
                    </div>
                )
            })}
        </Wrapper>
    )

}

const Wrapper = styled.main`
font-size:1.5rem;
padding:2rem;

.link{
    display:flex;
    gap:1rem;
}
`;

export default LandingPage;