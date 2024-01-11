import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { common } from '../styles/common'
const PostBtn= ({to, type, value, onClick}) =>{
    return (
    <StyledLink to={to}>
    <Button type={type} onClick={onClick}>
        {value}
    </Button>
    </StyledLink>
)
}

const StyledLink = styled(Link)`
    display: block;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 50%;
    right: -10px; /* 변경된 부분 */
    padding: 0 ${common.padding};
    bottom: 60%;
    text-decoration: none; /* 텍스트에 밑줄 제거 */
	z-index:2;
`;
// const StyledLink = styled(Link)`
//     display: block;
//     justify-content: center;
//     align-items: center;
//     position: fixed;
//     width: 50%;
//     right: 180px; /* 변경된 부분 */
//     padding: 0 ${common.padding};
//     bottom: 60%;
//     text-decoration: none; /* 텍스트에 밑줄 제거 */
// 	z-index:2;
// `;


const Button = styled.button`
    display: block;
    width: 80%;
    margin: 0 auto; /* 수평 가운데 정렬 */
    padding: 10px ${common.padding}; /* 수정: 위아래 패딩 추가 */
    color: ${common.colors.black};
    background: ${common.colors.white}; /* 배경색 파란색으로 설정 */
    font-weight: 700;
    font-size: ${common.fontSize.fz20};
    border-radius: 20px;
    border: none; /* 수정: 기본 테두리 제거 */
    cursor: pointer;
    text-decoration: none; /* 텍스트에 밑줄 제거 */
    z-index:2;


`;

export default PostBtn