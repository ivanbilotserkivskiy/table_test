import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCheck, faKey } from '@fortawesome/free-solid-svg-icons'

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
            <FontAwesomeIcon className="tile is-5" icon={faUser}/>
          </span>
          <span className="icon is-small is-right">
            <FontAwesomeIcon className="tile is-5" icon={faCheck}/>
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
            <FontAwesomeIcon className="tile is-5" icon={faKey}/>
          </span>
          <span className="icon is-small is-right">
            <FontAwesomeIcon className="tile is-5" icon={faCheck}/>
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
