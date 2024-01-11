import styled from '@emotion/styled'
import { common } from '../styles/common'
import { css } from '@emotion/react'


const ListItem = ({pageTypeNormal, pageTypeDetail, name, school,subject,date,matching, imgSrc}) =>{
return (
    <>
    <List type={pageTypeDetail}>
        <SnowmanImageBox>
        <img src={imgSrc} alt='눈사람 이미지'/>
        </SnowmanImageBox>
        <SmowmanInfoBox>
        <h2>{name}</h2>
        {
            pageTypeNormal 
            ?
            (
            <>
                {school}
                <br/>
                {subject}
                <br/>
                {date}
                <br/>
                {matching}
                
            </>
            ) : (
            <>
                <p>
                2023.12.24
                </p>
                <p>
                우와 너무 귀여워요!
                </p>
            </>
            )
        }
        </SmowmanInfoBox>
        <SnowmanLikeBox>
        </SnowmanLikeBox>
    </List>
    </>
);
}

// 말줄임표
const ellipsis = css` 
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
word-break: break-all;
`

const List = styled.li`
height:125px;
margin-bottom:20px;
padding:10px;
border-radius:12px;
left:-22px;
top: 130px;
display: flex;
&:Last-child{
    margin-bottom:0;
}
${(props) => props.type === 'PostOtherUser' && css`
background: ${common.colors.otherUserList};
background-color: #F0E6DA;

position:relative;
overflow:hidden;
&::before{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 4px;
    top: 0;
    background-color: #F0E6DA;
}
&::after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 4px;
    bottom: 0;
    background-color: #F0E6DA;
}
`}
`

const SnowmanImageBox = styled.div`
width:120px;
height:120px;
overflow:hidden;
display: flex;
align-items: center;
justify-content: center;
border-radius:8px;
img{
    height:100%;
}
`
const SmowmanInfoBox = styled.div`
flex: 1;
margin-left: 0px;
margin-top: -18px;
min-width: 120px;
h2{
    font-weight:${common.fontWeight.bold};
    font-size:${common.fontSize.fw16};
    margin-bottom:12px;
}
p{
    color:#525252;
    font-size:${common.fontSize.fw14};
    margin-bottom:5px;
    ${ellipsis}
}
img{
    vertical-align:middle;
}
`

const SnowmanLikeBox = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
margin-left: 10px;

`
export default ListItem