import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const login = () => {
    alert('登录成功');
    // 登录成功，重新设置一下时间
    localStorage.setItem("lastClickTime", Date.now());
    router.push('/');
  }
  return (
    <>
      <h1>登录页</h1>
      <button onClick={login}>登录</button>
    </>
  )
}