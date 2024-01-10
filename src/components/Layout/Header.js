import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { common } from '../../styles/common'
import Preview from '../../assets/icon/Preview.png'
import bar0 from '../../assets/icon/bar0.png'
import bar20 from '../../assets/icon/bar20.png'
import bar40 from '../../assets/icon/bar40.png'
import bar60 from '../../assets/icon/bar60.png'
import bar80 from '../../assets/icon/bar80.png'
import bar99 from '../../assets/icon/bar99.png'

const Header = () =>{
const location = useLocation()
const navigate = useNavigate()
const currentPath = location.pathname
let headerContents = '';
let cloudSrc = ''; // Default cloud image

switch (currentPath) {
    
    case '/choose':
    headerContents = '나의 끝이, 누군가의 시작이 되길';
    break;

    case '/check':
    headerContents = '나의 끝이, 누군가의 시작이 되길';
    break;

    case '/donate/gui':
    headerContents = '나의 끝이, 누군가의 시작이 되길';
    break;

    case '/donate/process1':
    headerContents = '나의 끝이, 누군가의 시작이 되길';
    cloudSrc =bar0
    break;

    case '/donate/process2':
    headerContents = '나의 끝이, 누군가의 시작이 되길';
    cloudSrc =bar20
    break;

    case '/donate/process3':
    headerContents = '나의 끝이, 누군가의 시작이 되길';
    cloudSrc =bar40
    break;

    case '/donate/process4':
    headerContents = '나의 끝이, 누군가의 시작이 되길';
    cloudSrc =bar60
    break;

    case '/donate/process5':
    headerContents = '나의 끝이, 누군가의 시작이 되길';
    cloudSrc =bar80
    break;

    case '/donate/process6':
    headerContents = '나의 끝이, 누군가의 시작이 되길';
    cloudSrc =bar99
    break;


    default:
    headerContents = '나의 끝이, 누군가의 시작이 되길';
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
    {cloudSrc && <Cloud src={cloudSrc} />}
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
border: none;
background : none;
`
const Cloud = styled.img`
position:absolute;
bottom:0;
bottom: -100%;
width: 100%;
z-index:-1;
`

export default Header