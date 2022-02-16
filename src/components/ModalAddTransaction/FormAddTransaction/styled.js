import * as React from 'react';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';

const StyledButton = styled('button')`
position: relative;
box-sizing: border-box;
display: flex;
min-width: 280px;
padding: 10px 20px;
font-size: 18px;
line-height: 27px;
color: #000000;
border: none;
border-bottom: 1px solid #E0E0E0;
background-color: transparent;
@media screen and (min-width: 768px) {
& {
    width: 410px;
}
}

&.${selectUnstyledClasses.focusVisible} {
outline: 4px solid rgba(100, 100, 100, 0.3);
}

&.${selectUnstyledClasses.expanded} {
border-radius: 0.75em 0.75em 0 0;

}
`;

const StyledListbox = styled('ul')`
padding: 6px 0;
margin: 5px 0 0 0;
min-width: 280px;
width: 100%;
max-height: 370px;
font-size: 18px;
line-height: 27px;
color: #000000;
box-sizing: border-box;
background-color: rgba(255, 255, 255, 0.5);
box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(50px);
border-radius: 20px;
overflow: scroll;

@media screen and (min-width: 768px) {
& {
    width: 410px;
}
}
`;

export const StyledOption = styled(OptionUnstyled)`
margin: 0;
padding: 0 22px;
height: 44px;
list-style: none;
font-size: 18px;
line-height: 27px,
color: #000000;
cursor: pointer;
overflow: scroll;
transition: 200ms linear;

&:last-of-type {
border-bottom: none;
}
&:hover,
&:focus {
    background-color: #fff;
    color: #FF6596;
    transition: 200ms linear;
}
}
`;

const StyledPopper = styled(PopperUnstyled)`
z-index: 1;
transition: 50ms linear;
`;


export const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
};
return <SelectUnstyled {...props} ref={ref} components={components} />;
});