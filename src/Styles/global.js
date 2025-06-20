import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing:border-box;
}
body{
    background-color:${({theme})=>theme.backgroundColor};
    color:${({theme})=>theme.textColor};
    margin:0;
    padding:0;
    overflow-x:hidden;
    transition:all 0.25s linear;
}

.canvas{
    display:grid;
    min-height:100vh;
    grid-auto-flow:row;
    grid-template-row:auto 1fr auto;
    gap:0.5rem;
    padding:2rem;
    width:100vw; 
    align-items:center;
    text-align:center;
}

.type-box{
    display:block;
    max-width:1000px;
    height:140px;
    margin-left:auto;
    margin-right:auto;
    // overflow:hidden;
}

.words{
    font-size:32px;
    display:flex;
    flex-wrap:wrap;
    color:${({theme})=>theme.typeBoxText}
}

.word{
    display:none;
    margin:5px;
    padding-right:2px;
}

.upper-menu{
    display:flex;
    width:1000px;
    margin-left:auto;
    margin-right:auto;
    font-size:1.3rem;
    justify-content:space-between;
    padding:0.5rem;
    }

.modes{
    display:flex;
    gap:0.5rem
}

.time-mode:hover{
    color:green;
    cursor:pointer;
}

.input-hidden{
    opacity:0;
}

.current{
    border-left: 1px solid;
    animation: blinking 2s infinite;
    animation-timing-function: ease;
    
    @keyframes blinking{
        0% {border-left-color:${({theme})=>theme.textColor};}
        25% {border-left-color:${({theme})=>theme.backgroundColor};}
        50% {border-left-color:${({theme})=>theme.textColor};}
        75% {border-left-color:${({theme})=>theme.backgroundColor};}
        100% {border-left-color:${({theme})=>theme.textColor}}
    }
}

.current-right{
    border-right: 1px solid;
    animation: blinkingRight 2s infinite;
    animation-timing-function: ease;
    
    @keyframes blinkingRight{
        0% {border-right-color:${({theme})=>theme.textColor};}
        25% {border-right-color:${({theme})=>theme.backgroundColor};}
        50% {border-right-color:${({theme})=>theme.textColor};}
        75% {border-right-color:${({theme})=>theme.backgroundColor};}
        100% {border-right-color:${({theme})=>theme.textColor}}
    }
}


.correctColor{
    color:green;
}

.inCorrectColor{
    color:red;
    cursor:pointer;
}

.footerSection{
    display:flex;
    width:1000px;
    justify-content:space-between;
    // align-items:center;
    margin-left:auto;
    margin-right:auto; 
}

.footerSectionLinks{
    display:flex;
    gap:1rem;
    cursor:pointer;
    font-size:1.2rem;
    align-items:center;
}

.stats-box{
    display:flex;
    width:1000px;
    height:auto;
    margin-left:auto;
    margin-right:auto;
}

.left-stats{
    width:30%;
    padding:30px;
}
.right-stats{
    width: 70%;
}

.title{
    font-size:20px;
    color:${({theme})=>theme.typeBoxText}
}

.subtitle{
    font-size:30px;
}
`;
