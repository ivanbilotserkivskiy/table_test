import { PersonData } from '../types/PersonData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

type Props = {
  data: PersonData;
  updateData: PersonData | null;
  editUpdateData: (data: PersonData | null) => void;
};

const TableRow: React.FC<Props> = ({ data, updateData, editUpdateData }) => {
  return (
    <tr>
      <th className="is-vcentered">{data.id}</th>
      <td className="is-vcentered">
        <a
          href="https://youtu.be/dQw4w9WgXcQ?si=8kVcl5sssp2MvaYW"
          target="_parent"
          className="has-text-info"
        >
          {data.name}
        </a>
      </td>
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
