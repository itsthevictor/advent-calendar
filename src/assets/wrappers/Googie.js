import styled from "styled-components";

const Wrapper = styled.div`
  background: rgb(4, 56, 4);

  main {
    min-height: 100vh;
    height: fit-content;
  }

  /* Title & Info */

  .wrapper {
    height: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap-reverse;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: transparent;
    margin-bottom: 20px;
    margin-top: 50px;

    .title h1 {
      font-family: Adieu;
      font-size: 8rem;
      text-transform: uppercase;
      color: hsl(139, 59%, 45%);
      text-align: center;
    }

    .text p {
      width: 85vw;
      max-width: 1000px;
      font-family: "Adieu-light";
      color: hsl(139, 59%, 75%);
      letter-spacing: 2.3;
    }
  }

  .calendar-container {
    width: 65vw;
  }

  /* CALENDAR */

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 1em; */
    padding-top: 5em;
  }

  .calendar {
    width: auto;
    margin-left: auto;
    display: grid;
  }
  .content {
    margin: auto;
    width: 100%;
  }

  .door {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0.35em;
    margin-bottom: 1em;
    margin-right: 1em;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }

  .door p {
    font-size: 5.5em;
    font-family: Adieu;
    color: rgb(255, 255, 255);
    text-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
  }

  .door:hover {
    background-color: rgba(221, 222, 222, 0.135);
  }

  .dooropen p {
    font-size: 5.5em;
    font-family: Adieu;
    color: rgb(255, 255, 255);
    text-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
  }

  .btn-container {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
  }
  .resetbutton {
    font-family: Adieu;
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

  .door-container:nth-of-type(1) {
    grid-area: 2 / 2 / 6 / 6;
    width: 400px;
    height: 400px;
  }

  .door-container:nth-of-type(2) {
    grid-area: 1 / 9 / 4 / 6;
    width: 300px;
    height: 300px;
    margin-top: 20px;
  }
  .door-container:nth-of-type(3) {
    grid-area: 2 / 10 / 6 / 12;
    width: 170px;
    height: 300px;
    margin-top: 30px;
  }
  .door-container:nth-of-type(4) {
    grid-area: 6 / 4 / 12 / 6;
    width: 155px;
    height: 370px;
  }
  .door-container:nth-of-type(5) {
    grid-area: 4 / 10 / 9 / 6;
    margin-top: 50px;
    width: 240px;
    height: 300px;
  }
  .door-container:nth-of-type(6) {
    grid-area: 8 / 9 / 11 / 6;
    width: 100%;

    height: 560px;
  }
  .door-container:nth-of-type(7) {
    grid-area: 6 / 13 / 12 / 9;
    width: 100%;

    height: 560px;
  }
  .door-container:nth-of-type(8) {
    grid-area: 10 / 1 / 16 / 4;
    width: 100%;

    height: 560px;
  }
  .door-container:nth-of-type(9) {
    grid-area: 17 / 9 / 12 /4;
    width: 100%;

    height: 560px;
  }

  .door-container:nth-of-type(10) {
    height: 560px;
    grid-area: 22 / 9 / 17 / 2;
    width: 100%;
  }
  .door-container:nth-of-type(11) {
    height: 560px;
    grid-area: 22 / 12 / 15 / 9;
    width: 100%;
  }
  .door-container:nth-of-type(12) {
    height: 560px;
    grid-area: 26 / 4 / 22 / 1;
    width: 100%;
  }
  .door-container:nth-of-type(13) {
    height: 560px;
    grid-area: 23 / 6 / 24 / 4;
    width: 100%;
  }
  .door-container:nth-of-type(14) {
    height: 560px;
    grid-area: 29 / 13 / 23 / 7;
    width: 100%;
  }
  .door-container:nth-of-type(15) {
    height: 560px;
    grid-area: 23 / 4 / 26 / 2;
    width: 100%;
  }
  .door-container:nth-of-type(16) {
    height: 560px;
    grid-area: 33 / 7 / 27 / 4;
    width: 100%;
  }
  .door-container:nth-of-type(17) {
    height: 560px;
    grid-area: 35 / 12 / 31 / 8;
    width: 100%;
  }
  .door-container:nth-of-type(18) {
    height: 560px;
    grid-area: 39 / 6 / 33 / 1;
    width: 100%;
  }
  .door-container:nth-of-type(19) {
    height: 560px;
    grid-area: 34 / 7 / 38 / 9;
    width: 100%;
  }
  .door-container:nth-of-type(20) {
    height: 560px;
    grid-area: 35 / 9 / 38 / 12;
    width: 100%;
  }
  .door-container:nth-of-type(21) {
    height: 560px;
    grid-area: 44 / 2 / 39 / 9;
    width: 100%;
  }
  .door-container:nth-of-type(22) {
    height: 560px;
    grid-area: 45 / 9 / 39 / 13;
    width: 100%;
  }
  .door-container:nth-of-type(23) {
    height: 560px;
    grid-area: 47 / 1 / 43 / 5;
    width: 100%;
  }
  .door-container:nth-of-type(24) {
    height: 560px;

    width: 100%;
    grid-area: 50 / 4 / 43 / 11;
    width: 100%;
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

    .ribbon2 {
      display: block;
    }
  }

  @media only screen and (max-width: 1025px) {
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
    }

    .calendar {
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
      margin: auto;
    }

    .ball-img {
      height: 35px;
      width: auto;
    }
  }

  @media only screen and (max-width: 390px) {
  }
`;

export default Wrapper;
