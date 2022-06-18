import styled from 'styled-components';
import { Hover } from './types';


export const Container = styled.div`
width: 375px;
height: 78px;
display: inline-block;
margin-top: 9px;
position: relative;
cursor: pointer;

`;

export const SelectStyled = styled.select`
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
box-shadow: rgba(0, 0, 0, 0.10) 0px 6px 40px !important;
&:hover {
    cursor: pointer;
}
&:focus-within{
	outline: 0;
  border: 2px solid #0077b9;
  padding: 14px 30px 0 16px;
}
&option {
	color: #333;
    &:disabled {
        color: #ddd !important;
        cursor: not-allowed;
    }
}
&:-moz-focusring {
    color:transparent;
    text-shadow:0 0 0 #333;
}
&:-moz-focusring * {
    color: #333;
    text-shadow:none;
}
`;
export const SpanTitleStyled = styled.span`
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
transition: all 20ms linear;
z-index: 1;

font-size: 12px !important;
top: 5px;
margin-top: -5px;
padding-top: 5px;
padding-bottom: 3px;
`;

export const IconStyled = styled.span<Hover>`
position: absolute;
display: block;
pointer-events: none;
right: 17px;
font-size: 21px;
font-weight: 300;
top: 25px;
line-height: 0;
height: 11px;
width: 11px;
overflow: hidden;
background-repeat: no-repeat;
background-image: ${(props: Hover)=> props.hover
    ? 'url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTg1LjM0NCAxODUuMzQ0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxODUuMzQ0IDE4NS4zNDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMzMzOyIgZD0iTTkyLjY3MiwxNDQuMzczYy0yLjc1MiwwLTUuNDkzLTEuMDQ0LTcuNTkzLTMuMTM4TDMuMTQ1LDU5LjMwMWMtNC4xOTQtNC4xOTktNC4xOTQtMTAuOTkyLDAtMTUuMTgNCgkJCWM0LjE5NC00LjE5OSwxMC45ODctNC4xOTksMTUuMTgsMGw3NC4zNDcsNzQuMzQxbDc0LjM0Ny03NC4zNDFjNC4xOTQtNC4xOTksMTAuOTg3LTQuMTk5LDE1LjE4LDANCgkJCWM0LjE5NCw0LjE5NCw0LjE5NCwxMC45ODEsMCwxNS4xOGwtODEuOTM5LDgxLjkzNEM5OC4xNjYsMTQzLjMyOSw5NS40MTksMTQ0LjM3Myw5Mi42NzIsMTQ0LjM3M3oiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==")' 
    : 'url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTg1LjM0NCAxODUuMzQ0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxODUuMzQ0IDE4NS4zNDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojODg4OyIgZD0iTTkyLjY3MiwxNDQuMzczYy0yLjc1MiwwLTUuNDkzLTEuMDQ0LTcuNTkzLTMuMTM4TDMuMTQ1LDU5LjMwMWMtNC4xOTQtNC4xOTktNC4xOTQtMTAuOTkyLDAtMTUuMTgNCgkJCWM0LjE5NC00LjE5OSwxMC45ODctNC4xOTksMTUuMTgsMGw3NC4zNDcsNzQuMzQxbDc0LjM0Ny03NC4zNDFjNC4xOTQtNC4xOTksMTAuOTg3LTQuMTk5LDE1LjE4LDANCgkJCWM0LjE5NCw0LjE5NCw0LjE5NCwxMC45ODEsMCwxNS4xOGwtODEuOTM5LDgxLjkzNEM5OC4xNjYsMTQzLjMyOSw5NS40MTksMTQ0LjM3Myw5Mi42NzIsMTQ0LjM3M3oiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==")'};
`;