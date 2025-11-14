import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, setUser } from '../store/userSlice';

const Nav = () => {
  // const initialUserData = localStorage.getItem('userData') ? 
  // JSON.parse(localStorage.getItem('userData')) : {};//text로 되어있는 데이터를 다시 객체로 변환

  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  //const [userData, setUserData] = useState(initialUserData); //initialUserData 넣으면 프로필 이미지 살아있음
  const dispatch = useDispatch();

  const userData = useSelector(state => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user', user);
      //인증된 유저인 경우 자동으로 main으로 넘어가게
      if (user) {
        //해당 기능을 로그인페이지에서만 사용할 수 있게 조건 추가(다른페이지에서도 로그인상태면 main으로 가는거 방지)
        if (pathname === "/") {
          navigate('/main');
        }
      } else {
        navigate('/');
      }
    })
  }, [auth, navigate, pathname] /*변할때마다 useeffect콜 */);


  //console.log(pathname);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    //컴포넌트 더이상 사용하지않을때
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  //console.log('useLocation.search',)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    //console.log('e.target.value',e.target.value);
    navigate(`/search?q=${e.target.value}`);
  }

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        // setUserData(result.user);

        dispatch(setUser({
          id: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL
        }))

        
        // console.log('result', result);
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser)
        
      }).catch((error) => {
        console.log('error', error);
      })
  }
  return (
    <NavWrapper show={show}>
      <Logo>
        <img
          alt="Disney Plus Logo"
          src='/images/logo.svg'
          onClick={() => (window.location.href = "/")}
        />
      </Logo>

      {pathname === "/" ?
        (<Login onClick={handleAuth}>Login</Login>) :
        <Input
          value={searchValue}
          onChange={handleChange}
          className='nav_input'
          type='text'
          placeholder='검색해주세요'
        />}
      {pathname !== "/" && (
        <SignOut>
          <UserImg src={userData.photoURL} alt={userData.displayName} />
          <DropDown>
            <span onClick={handleSignOut}>Sign Out</span>
          </DropDown>
        </SignOut>
      )}
    </NavWrapper>

  )
}

export default Nav

//styled component 이용(nav 태그)

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: rgb(19,19,19);
  border: 1px solid rgba(151,151,151,0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0/50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    ${DropDown} {
      opacity: 1; 
      transition-duration: 1s;
    }
  }
`;

const UserImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;


const Login = styled.a`
  background-color: rgba(0,0,0,0.6);
  padding: 8px 16px;
  text-transform: uppercase; //대문자 변경
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: gray;
    border-color: transparent;
  }
`;
const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%,0);
  background-color: rgba(0,0,0,0.582);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: none;
`;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props => props.show ? "#090b13" : "transparent"}; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img{
    display: block;
    width: 100%;
  }
`;
