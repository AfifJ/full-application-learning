const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action="" method="post">
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
