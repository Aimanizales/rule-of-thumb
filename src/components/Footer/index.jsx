import styled from 'styled-components';

const FooterStyled = styled.footer`
    border: thin solid red;
    background-color: #ccc;
`

function Footer () {
    return (
        <FooterStyled>
            <ul>
                <li>Terms and Conditions</li>
                <li>Privacy and Policy</li>
                <li>Contact Us</li>
            </ul>

            Follow Us
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
        </FooterStyled>
    )
};

export default Footer;