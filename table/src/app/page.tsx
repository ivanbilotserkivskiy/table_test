'use client';

import { useState, useEffect } from 'react';
import withAuth from './HOCs/withAuth';
import { TableData } from './types/TableData';
import TableRow from './components/TableRow';
import { tableMockData } from './mockData/tableMockData';
import { PersonData } from './types/PersonData';
import { getTableData, updatePersonData } from './utils/api';

const Home = () => {
  const [tableData, setTableData] = useState<TableData>(tableMockData);
  const [updateData, setUpdateData] = useState<PersonData | null>(null);

  const getDataFromServer = async () => {
    const data = await getTableData();

    setTableData(data);
  };

  useEffect(() => {
    getDataFromServer();
  }, []);

  const editUpdateData = (data: PersonData | null) => {
    setUpdateData(data);
  };

  const changeUdateData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateData((prevData) => ({
      ...(prevData as PersonData),
      [event.target.name]: event.target.value,
    }));
  };

  const applyUpdateData = async (data: PersonData) => {
    await updatePersonData(data);

    setUpdateData(null);

    getDataFromServer();
  };

  return (
    <main>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>
              <abbr title="Birthday Date">Birthday</abbr>
            </th>
            <th>
              <abbr title="Phone Number">Phone</abbr>
            </th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {tableData?.results.map((row) => (
            <TableRow
              key={row.id}
              data={row}
              updateData={updateData}
              editUpdateData={editUpdateData}
              applyUpdateData={applyUpdateData}
              changeUdateData={changeUdateData}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default withAuth(Home);
