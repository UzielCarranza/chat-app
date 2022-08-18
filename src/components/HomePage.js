import {SplitScreen} from "../utils/SplitScreen";
import {LeftHandComponent} from "../utils/LeftHandComponent";
import {RightHandComponent} from "../utils/RightHandComponent";

export const HomePage = props => {
    return (
        <SplitScreen
            left={LeftHandComponent}
            right={RightHandComponent}
        >
            <LeftHandComponent name="Left component"/>
            <RightHandComponent message="right component"/>
        </SplitScreen>
    );
}