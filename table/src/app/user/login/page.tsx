'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCheck, faKey } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { login } from '@/app/GlobalRedux/Features/authrize/authorizeSlice';
import { authorizeUser } from '@/app/utils/api';
import { redirect } from 'next/navigation';
import { UserData } from '@/app/types/UserData';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';
import { pattern } from '@/app/utils/pattern';

const Login = () => {
  const [formData, setFormData] = useState<UserData>({
    username: '',
    password: '',
  });

  const [formDataError, setFormDataError] = useState({
    username: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const authorize = useSelector(
    (state: RootState) => state.authorize.authorized
  );
  const dispatch = useDispatch();

  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (authorize) {
      redirect('/');
    }
  }, [authorize]);

  const changeFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitFromData = async (event: React.FormEvent) => {
    setIsError(false);

    setFormDataError({
      username: '',
      password: '',
    });
    if (formData.username.length < 3) {
      setFormDataError((prev) => ({
        ...prev,
        username: 'The username must contain at least 3 symbols',
      }));

      return;
    }
    if (formData.password.length < 8) {
      setFormDataError((prev) => ({
        ...prev,
        password: 'The password must contain at least 8 symbols',
      }));

      return;
    }

    if (!pattern.test(formData.password)) {
      setFormDataError((prev) => ({
        ...prev,
        password: 'The password must contain at least one number',
      }));

      return;
    }

    event.preventDefault();

    setIsError(() => false);

    try {
      setIsLoading(true);
      const authorizationResult = await authorizeUser(formData);
      if (authorizationResult.error) {
        return setIsError(() => true);
      }

      dispatch(login());
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="is-flex-direction-column tile is-3 container pt-5">
      <form action="" method="POST" onSubmit={submitFromData}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              autoComplete="username"
              onChange={changeFormData}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon className="tile is-5" icon={faUser} />
            </span>
            <span className="icon is-small is-right">
              <FontAwesomeIcon className="tile is-5" icon={faCheck} />
            </span>
          </div>
          {formDataError.username ? (
            <p className="help is-size-6 is-danger">{formDataError.username}</p>
          ) : null}
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="current-password"
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
          {formDataError.password ? (
            <p className="help is-size-6 is-danger">{formDataError.password}</p>
          ) : null}
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
            <button
              className="button is-link"
              type="submit"
              disabled={isLoading}
            >
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
