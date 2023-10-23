"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCheck, faKey } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    usernam: "",
    password: "",
  });

  const [isError, setIsError] = useState(false);

  const changeFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitFromData = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="is-flex-direction-column tile is-8 container">
      <form action="" method="POST" onSubmit={submitFromData}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Username"
              name="username"
              value={formData.usernam}
              onChange={changeFormData}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon className="tile is-5" icon={faUser} />
            </span>
            <span className="icon is-small is-right">
              <FontAwesomeIcon className="tile is-5" icon={faCheck} />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={changeFormData}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon className="tile is-5" icon={faKey} />
            </span>
            <span className="icon is-small is-right">
              <FontAwesomeIcon className="tile is-5" icon={faCheck} />
            </span>
          </div>
        </div>

        {isError ? (
          <div className="mb-2">
            <p className="help is-size-6 is-danger">
              Verify your username and password for accuracy, including letter
              case and typos.
            </p>
          </div>
        ) : null}

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="submit">
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
