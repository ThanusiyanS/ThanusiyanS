import styled,{createGlobalStyle} from "styled-components";


export const Container = styled.div`
    width:100%;
    max-width:1300px;
    margin: 0 auto;
    padding:0 50px;

    @media screen and (max-width:960px){
        padding:0 30px;
    }
`;

