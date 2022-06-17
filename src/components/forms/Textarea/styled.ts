import styled from 'styled-components';
import { TextareaProps } from './types';


/* export const ExampleCenterContainer = styled.div`
    text-align: center;
    max-width: 475px;
    margin: 0 auto;
    background-color: #f2f2f2;
`; */

export const DataElm = styled.div`
    width: 375px;
    height: 200px;
    display: inline-block;
`;

export const DataInputContainer = styled.div`
    margin-top: 9px;
    position: relative;
`;

export const StyledTextarea = styled.textarea`
    font-size: 17px;
    line-height: 17px;
    font-weight: 400;
    letter-spacing: -.022em;
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    color: #333;
    padding: 15px 30px 0 18px;
    text-align: left;
    background: #fff;
    background-clip: border-box;
    background-clip: border-box;
    background-clip: border-box;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #ddd;
    border-radius: 4px;
    background-clip: padding-box;
    margin-bottom: 9px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    min-height: 60px;

    user-select: auto !important;
    &:focus {
        border: 2px solid #0077b9;
        padding: 14px 30px 0 16px;
    }
`;

export const StyledLabel = styled.label`
    font-size: 15px;
    line-height: 30px;
    font-weight: 300;
    letter-spacing: -.01em;
    position: absolute;
    top: 15px;
    left: 10px;
    color: #777;
    pointer-events: none;
    padding: 0 0 0 8px;
    transition: all 80ms linear;
    z-index: 1;
`;