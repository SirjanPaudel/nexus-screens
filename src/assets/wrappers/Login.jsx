import styled from "styled-components";
import backgroundImg from '../images/loginimg.jpg'
const Wrapper = styled.div`
background-image: url(${backgroundImg});
background-size: cover; 
background-position: center;
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;



.login-box{
    height: fit-content;
    width:25%;
    padding: 20px;
    font-size: x-large;
    color: white;
    /* From https://css.glass */
background: rgba(0, 0, 0, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(0, 0, 0, 0.3);
}
.login-btn{
    color: white;
    border: 2px solid white;
    outline: 2px white;
  }
  .login-btn:hover{
    color: black;
  }
  .addUser p{
    margin-top: 15px;
font-size: small;

  }
  .addUser button{
    font-size: small;
    color: blue;
  }


`
export default Wrapper;
