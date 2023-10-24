'use client';
import { ErrorInfo } from '../types/ErrorInfo';
import { PersonData } from '../types/PersonData';
import cn from 'classnames';

type Props = {
  data: PersonData | null;
  editUpdateData: (data: PersonData | null) => void;
  applyUpdateData: (data: PersonData) => void;
  changeUpdateData: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorInfo: ErrorInfo | null;
};

const Modal: React.FC<Props> = ({
  data,
  editUpdateData,
  applyUpdateData,
  changeUpdateData,
  errorInfo,
}) => {
  return (
    <div
      className={cn('modal', {
        'is-active': data,
      })}
      id="edit_data"
    >
      <div
        className="modal-background"
        onClick={() => editUpdateData(null)}
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Update person data</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => editUpdateData(null)}
          ></button>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left has-icons-right">
              <input
                type="text"
                name="name"
                className="input"
                value={data?.name || ''}
                onChange={changeUpdateData}
              />
            </div>
            {errorInfo?.name ? (
              <label className="label has-text-danger is-small pt-1">
                {errorInfo.name}
              </label>
            ) : null}
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                type="email"
                name="email"
                className="input"
                value={data?.email || ''}
                onChange={changeUpdateData}
              />
            </div>
            {errorInfo?.email ? (
              <label className="label has-text-danger is-small pt-1">
                {errorInfo.email}
              </label>
            ) : null}
          </div>
          <div className="field">
            <label className="label">Birhtday</label>
            <div className="control has-icons-left has-icons-right">
              <input
                type="text"
                name="birthday_date"
                className="input"
                value={data?.birthday_date || ''}
                onChange={changeUpdateData}
              />
            </div>
            {errorInfo?.birthday_date ? (
              <label className="label has-text-danger is-small pt-1">
                {errorInfo.birthday_date}
              </label>
            ) : null}
          </div>
          <div className="field">
            <label className="label">Phone Number</label>
            <div className="control has-icons-left has-icons-right">
              <input
                type="phone"
                name="phone_number"
                className="input"
                value={data?.phone_number || ''}
                onChange={changeUpdateData}
              />
            </div>
            {errorInfo?.phone_number ? (
              <label className="label has-text-danger is-small pt-1">
                {errorInfo.phone_number}
              </label>
            ) : null}
          </div>
          <div className="field">
            <label className="label">Address</label>
            <div className="control has-icons-left has-icons-right">
              <input
                type="text"
                name="address"
                className="input"
                value={data?.address || ''}
                onChange={changeUpdateData}
              />
            </div>
            {errorInfo?.address ? (
              <label className="label has-text-danger is-small pt-1">
                {errorInfo.address}
              </label>
            ) : null}
          </div>
        </section>
        <footer className="modal-card-foot">
          <button
            className="button is-success"
            onClick={() => {
              if (data) {
                applyUpdateData(data);
              }
            }}
          >
            Save changes
          </button>
          <button className="button" onClick={() => editUpdateData(null)}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
