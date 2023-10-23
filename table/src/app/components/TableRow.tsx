import { PersonData } from '../types/PersonData';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCancel, faCheck } from '@fortawesome/free-solid-svg-icons';

type Props = {
  data: PersonData;
  updateData: PersonData | null;
  editUpdateData: (data: PersonData | null) => void;
  applyUpdateData: (data: PersonData) => void;
  changeUdateData: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TableRow: React.FC<Props> = ({
  data,
  updateData,
  editUpdateData,
  applyUpdateData,
  changeUdateData,
}) => {
  return updateData && updateData.id === data.id ? (
    <tr>
      <th>{data.id}</th>
      <td className="is-vcentered">
        <input
          type="text"
          name="name"
          className="input"
          value={updateData.name}
          onChange={changeUdateData}
        />
      </td>
      <td className="is-vcentered">
        <input
          type="email"
          name="email"
          className="input"
          value={updateData.email}
          onChange={changeUdateData}
        />
      </td>
      <td className="is-vcentered">
        <input
          type="text"
          name="birthday_date"
          className="input"
          value={updateData.birthday_date}
          onChange={changeUdateData}
        />
      </td>
      <td className="is-vcentered">
        <input
          type="phone"
          name="phone_number"
          className="input"
          value={updateData.phone_number}
          onChange={changeUdateData}
        />
      </td>
      <td className="is-vcentered">
        <input
          type="text"
          name="address"
          className="input"
          value={updateData.address}
          onChange={changeUdateData}
        />
      </td>
      <td className="is-vcentered">
        <div className="">
          <a className="icon is-small is-hovered has-text-success mr-1 is-right is-clickable">
            <FontAwesomeIcon
              icon={faCheck}
              onClick={() => applyUpdateData(data)}
            />
          </a>
          <a className="icon is-small is-hovered has-text-danger is-left is-clickable">
            <FontAwesomeIcon
              icon={faCancel}
              onClick={() => editUpdateData(null)}
            />
          </a>
        </div>
      </td>
    </tr>
  ) : (
    <tr is-clickable>
      <th>{data.id}</th>
      <td className="is-vcentered">{data.name}</td>
      <td className="is-vcentered">
        <address>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </address>
      </td>
      <td className="is-vcentered">{data.birthday_date}</td>
      <td className="is-vcentered">
        <address>
          <a href={`tel:${data.phone_number}`}>{data.phone_number}</a>
        </address>
      </td>
      <td className="is-vcentered">
        <address>{data.address}</address>
      </td>
      <td className="is-vcentered">
        <div>
          <a
            className="icon is-small is-hovered has-text-info is-clickable"
            onClick={() => editUpdateData(data)}
          >
            <FontAwesomeIcon className="is-hovered is-danger" icon={faPen} />
          </a>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
