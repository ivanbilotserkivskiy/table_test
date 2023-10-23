const Login = () => {
  return (
    <div className="is-flex-direction-column tile is-8 container">
      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="text"
            placeholder="Username"
            value=""
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <p className="help is-danger">This username does not exsists</p>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="password"
            placeholder="Password"
            value=""
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p className="help is-danger">This password is invalid</p>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
