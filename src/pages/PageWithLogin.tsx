import React from "react";

const PageWithLogin = () => {
  // useLoginState의 내부 구현에 대해서는 2, 3강에서 다룸
  const { isLogged, routeToLoginPage } = useLoginState();

  // 로그인되지 않은 경우에는 로그인 페이지로 리다이렉트
  if (!isLogged) {
    routeToLoginPage();
    // 라우팅 되기 전 잠깐이라도 로그인이 필요한 컨텐츠를 보여주지 않음
    return <>로그인 페이지로 이동합니다...</>;
  }

  return <div>로그인이 필요한 페이지!</div>;
};

export default PageWithLogin;
