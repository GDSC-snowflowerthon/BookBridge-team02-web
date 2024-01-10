import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { common } from '../../styles/common'
import Preview from '../../assets/icon/Preview.png'
import cloud from '../../assets/icon/recwhitebox.png'

const Header = () =>{
const location = useLocation()
const navigate = useNavigate()
const currentPath = location.pathname
let headerContents = '';

switch (currentPath) {
    
    case '/choose':
    headerContents = '나의 끝이, 누군가의 시작이 되길';
    break;

    case '/check':
    headerContents = '나의 끝이, 누군가의 시작이 되길';
    break;

    default:
    headerContents = '';
}

const BackLocation = () => {  
    navigate(-1)
}

return (
    <HeaderWarp>
    <BackButton onClick={BackLocation}>
        <img src={Preview}/>
    </BackButton>
    {headerContents}
    </HeaderWarp>
)
}

const HeaderWarp = styled.header`
z-index:1;
height: 30px;
font-weight: 700;
line-height: 50px;
background:;
text-align:center;
position:sticky;
top:0;
width:100%;
background:${common.colors.white};
display:flex;
align-items:center;
justify-content:center;
font-size:${common.fontSize.fz16};
`
const BackButton = styled.button`
position: absolute;
top: 50%;
left: 24px;
transform: translateY(-50%);
`

const Cloud = styled.img`
position:absolute;
bottom:0;
bottom: -54%;
width: 100%;
z-index:-4;
`
export default Header