import styled from 'styled-components'

//main view
const Container = styled.div`
width: 100%;
height: 100vh;
margin-top: 0;
padding-top: 0;
display: flex;
flex-direction: row;
`;


//css properties for each side
const Pane = styled.div`
margin-top: 0;
flex: ${props => props.weight}
`

export const SplitScreen = ({

                                children,
                                leftWeight = 1,
                                rightWeight = 2,

                            }) => {
    //receives flex property
    const [left, right] = children;
    return (
        <Container>
            <Pane weight={leftWeight}>{left}</Pane>

            <Pane weight={rightWeight}>{right}</Pane>
        </Container>
    )
}