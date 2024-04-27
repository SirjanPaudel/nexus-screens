import styled from "styled-components";

const Wrapper = styled.div`
  /* font-family: ; */
  
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(/src/assets/images/loginimg.jpg);

  background-size: cover; 
    background-position: center;
    height: 100vh;
    width: 100%;

.navbar-brand
{
    position: relative;
    width: 70px;
    left: 15px;
}

    .hero-image {

    background-size: cover; 
    background-position: center;
    height: 100vh;
    width: 100%;
    
  }
  .box{
    height: 90%;
    display: flex;
    align-items: center ;
    justify-content: end;
    
  }
  .hero-text {

    padding: 15px;
    margin: 50px;
    height: 8rem;
    

  }
  .hero-text p, .hero-text h1{
    color: white;
    font-size: 1.9rem;
    font-weight: 900;
  }
  .login-btn{
    color: white;
  }
  .login-btn:hover{
    color: black;
  }


`

export default Wrapper;