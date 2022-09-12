import styled from "styled-components";

const SELFIE_LINK = "https://media-exp1.licdn.com/dms/image/C4D03AQFMPXpJ7A82HA/profile-displayphoto-shrink_800_800/0/1616545177805?e=1668643200&v=beta&t=6yEsNDnEuhHHWYK0euVPtB_xIWmhsv5CTANQI3oQV3k"
const IMAGE_SIZE = "100px";
const StyledSelfie = styled.img`
    width: ${IMAGE_SIZE};
    height: ${IMAGE_SIZE};
    border-radius: 50%;
    margin-right: 1rem;
`;

export const Selfie = () => {
    return (
        <StyledSelfie src={SELFIE_LINK} alt="Josh's face" />
    )
}