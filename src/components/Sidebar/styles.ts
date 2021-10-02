import styled from "styled-components";

export const Container = styled.div`
  .navbar {
    background-color: ${(props) => props.theme.colors.black};
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .login-menu {
    width: 200px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    margin-right: 2rem;
  }

  .sign-up {
    width: 100px;
    height: 45px;
    background-color: ${(props) => props.theme.colors.gray};
    display: flex;
    align-items: center;
    border-radius: 4px;
    justify-content: center;
    cursor: pointer;
  }

  .sign-up a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    font-size: 18px;
  }

  .sign-in {
    height: 45px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    justify-content: center;
    cursor: pointer;
  }

  .sign-in a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray};
    font-size: 18px;
  }

  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
  }

  .nav-menu {
    background-color: ${(props) => props.theme.colors.black};
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 1200ms;
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }

  .nav-text {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
    padding-left: 16px;
  }

  .nav-text a:hover {
    background-color: ${(props) => props.theme.colors.gray};
    color: ${(props) => props.theme.colors.black};
  }

  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    background-color: ${(props) => props.theme.colors.black};
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
