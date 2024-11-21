import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url("https://res.cloudinary.com/dgp67jheg/image/upload/v1701336726/advent%20calendar/ooooi_brquka.png");

  background-repeat: no-repeat;
  background-size: cover;

  main {
    height: 100%;
  }

  /* Title & Info */

  .wrapper {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }

  .info-container {
    width: 35vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: transparent;
    padding-bottom: 50px;
  }

  .yeehaw {
    width: 120%;
  }

  .calendar-container {
    width: auto;
  }

  .info {
    color: palevioletred;
  }

  .title {
    font-size: 5.5rem;

    color: white;

    /* margin-bottom: 0.25em; */
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }
  .under-title {
    font-family: Satisfy, sans-serif;
    font-style: italic;
    color: rgb(223, 245, 110);
    font-size: 4.5rem;
    margin-top: -10px;

    stroke: rgba(255, 166, 0, 0.25);
    -webkit-text-stroke: 0.25px rgba(255, 166, 0, 0.218);
  }

  .under-title-2 {
    font-family: Petrona, sans-serif;
    font-style: italic;
    color: rgb(223, 245, 110);
    font-size: 2.5rem;
    margin-top: -20px;
    margin-bottom: 4rem;
    stroke: rgba(255, 166, 0, 0.345);
    -webkit-text-stroke: 0.5px rgba(255, 166, 0, 0.197);
    margin-bottom: 4rem;
  }

  .subtitle {
    color: cornsilk;
    padding: 1.5rem;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-style: italic;
  }

  .obs {
    font-family: Petrona, sans-serif;
    padding: 1.5rem;
    height: auto;
    width: clamp(50%, 477px, 90%);
    margin: auto;
    color: white;
    border-radius: 15px;
    font-size: 1.5rem;
    text-align: justify;
    /* From https://css.glass */
    background: rgba(5, 20, 62, 0.275);

    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.23);
  }

  .socials-container,
  .socials-container2 {
    font-family: Petrona, sans-serif;
    padding: 1.5rem;
    margin: -100px auto 20px auto;
    max-width: 477px;
    width: 80%;
    text-align: center;
    color: rgb(131, 212, 225);
  }

  .socials-container h3 {
    font-size: 1.25rem;
    font-weight: 400;
    color: rgb(131, 212, 225);
    margin-bottom: 15px;
  }

  .social-btn {
    opacity: 0.75;
    transition: 0.25s linear;
  }

  .social-btn:hover {
    opacity: 1;
    color: white !important;
  }

  .social-text {
    margin-bottom: 10px;
  }

  .social-btns {
    display: flex;
    width: 100%;
    align-items: center;
    margin: auto;
    justify-content: space-around;
  }

  .socials-container2 {
    display: none;
  }

  /* Modal */

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    min-height: 100%;
    width: 100%;
    background: rgba(37, 41, 55, 0.882);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    background-size: cover;
  }

  .modal {
    color: #f2f2f2;
    width: 470px;
    height: min(50%, 300px);
    position: relative;
    margin: auto;
    padding: 0 2rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 99;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  .orange-gradient {
    background-image: url("https://res.cloudinary.com/dgp67jheg/image/upload/q_100/v1701345968/advent%20calendar/ooooi2_vtkpc4.webp");
    /* background-image: url("https://res.cloudinary.com/dgp67jheg/image/upload/v1701715329/advent%20calendar/heartoftheforest2_590x_xc6qae.webp"); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .modal-text,
  .hurray {
    font-family: Petrona, sans-serif;
    font-size: 1.5em;
    text-align: center;
  }

  .close-btn {
    background: transparent;
    color: white;
    font-size: 2rem;
    outline: none;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  .product-links {
    color: white;
    position: absolute;
    bottom: 30px;
  }

  .link-arrow {
    margin-bottom: -5px;
  }

  a {
    font-family: Petrona, sans-serif;
    color: white;
    text-decoration: none;
  }
  a :visited {
    font-family: Petrona, sans-serif;
    color: white;
    text-decoration: none;
  }

  .hidden {
    display: none;
  }

  /* CALENDAR */

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 1em; */
    padding-top: 5em;
    padding-bottom: 5em;
  }

  .calendar {
    width: auto;
    margin-left: auto;
    max-width: 477px;
    height: 662px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    padding: 2em;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-radius: 0.5em;
    background-image: url("https://res.cloudinary.com/dgp67jheg/image/upload/q_100/v1701699852/advent%20calendar/treempty_udfejv.webp");
    /* background-image: url("https://res.cloudinary.com/dgp67jheg/image/upload/v1701715329/advent%20calendar/heartoftheforest2_590x_xc6qae.webp"); */
    background-repeat: no-repeat;
    background-size: cover;
  }
  .content {
    margin: auto;
    width: 100%;
  }

  .door {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    min-height: 40px;
    width: 65px;
    height: 65px;
    background-color: rgba(221, 222, 222, 0);
    border: 2px solid rgba(251, 243, 224, 0.277);
    border-radius: 0.35em;
    margin-bottom: 1em;
    margin-right: 1em;
    cursor: pointer;
  }

  .door p {
    font-size: 1.5em;
    color: rgb(255, 255, 255);
  }

  .door:hover {
    background-color: rgba(221, 222, 222, 0.135);
  }

  .dooropen {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    /* background-color: rgba(45, 45, 45, 0.1); */
    border: 2px solid rgba(251, 243, 224, 0.277);
    box-shadow: inset 11px -11px 34px 3px rgba(0, 0, 0, 0.1);
    border-radius: 0.35em;
    margin-bottom: 1em;
    margin-right: 1em;
    text-align: center;
  }

  .dooropen p {
    color: #f2f2f2;
    width: 80%;
  }
  /* .hover{
  margin-top: 1.5em;
  height: 20px;
  text-align: center;
font-family: 'Playfair Display', serif;
  font-size: 1em;
  color: white;
  word-wrap: normal;
  max-width: 477px;
} */
  .btn-container {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
  }
  .resetbutton {
    font-family: "Playfair Display", serif;
    font-style: italic;

    cursor: pointer;
    margin-top: 2.5em;
    background-color: transparent;
    width: 100%;
    max-width: 477px;

    height: 3em;
    /* padding: 0.5em; */
    border-radius: 0.5em;
    border: none;
    font-size: 1em;
    font-weight: bold;
    color: #f2f2f2;
    background-color: rgba(35, 71, 87, 0.297);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  .resetbutton:hover {
    background-color: rgba(35, 71, 87, 0.297);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  .resetbutton:active {
    background-color: rgba(5, 71, 99, 0.9);
  }

  .door-container:nth-of-type(2n) {
    padding-top: 33px;
  }

  .ball-img {
    width: auto;
    height: 40px;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
  rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; */
  }

  .ribbon {
    margin-top: 50px;
    width: 100%;
  }

  .ribbon-container {
    /* position: absolute;
  bottom: 0; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px auto;
  }

  .ribbon2 {
    width: 70vw;
    display: none;
  }

  @media only screen and (max-width: 875px) {
    .info-container {
      width: 78vw;
      margin-bottom: -40px;
      margin-top: 60px;
    }
    /* .under-title{
  margin-bottom: 1.5rem;
} */
    /* .ribbon{
  position: absolute;
  bottom: 40px;
} */

    .ribbon2 {
      display: block;
    }
  }

  @media only screen and (max-width: 1025px) {
    body {
      background-image: url(https://res.cloudinary.com/dgp67jheg/image/upload/v1701346352/advent%20calendar/ooooi3_f05hfu.png);
      background-position: top;
      background-repeat: repeat-y;
    }

    /* .under-title {
    margin-bottom:1.5rem;
  } */

    .socials-container {
      display: none;
    }
    .socials-container2 {
      display: block;
      margin: 20px auto auto auto;
    }

    .calendar {
      margin: auto;
    }

    .info-container {
      width: 85vw;
      margin-bottom: -60px;
      margin-top: 60px;
    }

    .ribbon {
      display: none;
    }

    .ribbon2 {
      display: block;
    }
  }

  @media only screen and (max-width: 521px) {
    body {
      background-image: url(https://res.cloudinary.com/dgp67jheg/image/upload/v1701346352/advent%20calendar/ooooi3_f05hfu.png);
      background-position: top;
      background-repeat: repeat-y;
    }

    .info-container {
      width: 85vw;
      margin-bottom: -10px;
    }

    .modal {
      width: 95vw;
    }

    .calendar {
      max-width: 95vw;
      padding: 20px 20px 20px 20px;
    }

    .info-container {
      width: 96vw;
      margin-top: 40px;
    }

    .yeehaw {
      width: 96vw;
    }

    .under-title {
      font-size: 3rem;
      margin-top: -1.5rem;
    }

    .under-title-2 {
      margin-bottom: 1.5rem;
      font-size: 2rem;
    }

    .obs {
      width: auto;
      margin-bottom: -80px;
      font-size: large;
    }

    .calendar-container {
      width: 96vw;
      margin: auto;
      height: 400px;
    }

    .calednar {
      width: 90vw;
    }

    .door,
    .dooropen {
      width: 50px;
      height: 50px;
    }

    .hover {
      width: 90vw;
      margin: auto;
    }

    .ribbon2 {
      display: block;
    }
  }

  @media only screen and (max-width: 450px) {
    .info-container {
      width: 90vw;
    }

    .calendar {
      width: 95vw;
      padding: 30px 10px 30px 10px;
    }

    .under-title {
      margin-bottom: 0.5rem;
      font-size: 3rem;
      margin-top: 0.25rem;
    }

    .door,
    .dooropen {
      width: 47px;
      height: 47px;
    }

    .calendar {
      width: 390px;
      height: 550px;
      margin: auto;
    }

    .ball-img {
      height: 35px;
      width: auto;
    }

    .ribbon2 {
      display: block;
    }
  }

  @media only screen and (max-width: 390px) {
    .ribbon2 {
      display: block;
    }
  }
`;

export default Wrapper;
