import styled from "styled-components";

const Wrapper = styled.div`
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

  @media only screen and (max-width: 521px) {
    .modal {
      width: 95vw;
    }
  }
`;

export default Wrapper;
