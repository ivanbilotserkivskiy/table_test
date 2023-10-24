'use client';

import { useState, useEffect } from 'react';
import withAuth from './HOCs/withAuth';
import { TableData } from './types/TableData';
import TableRow from './components/TableRow';
import { tableMockData } from './mockData/tableMockData';
import { PersonData } from './types/PersonData';
import { getTableData, updatePersonData } from './utils/api';
import Pagination from './components/Pagination';
import { useSearchParams } from 'next/navigation';
import Modal from './components/Modal';
import { toast, Toaster } from 'react-hot-toast';
import { ErrorInfo } from './types/ErrorInfo';

const Home = () => {
  const [tableData, setTableData] = useState<TableData>(tableMockData);
  const [updateData, setUpdateData] = useState<PersonData | null>(null);
  const [hasChanges, setHasChanges] = useState<boolean>(false);
  const [errorInfo, setErrorInfo] = useState<ErrorInfo | null>(null);
  const searchParams = useSearchParams();

  const getDataFromServer = async () => {
    const offset = searchParams.get('offset') || 0;
    const limit = searchParams.get('limit') || 10;
    const data = await getTableData(`limit=${limit}&offset=${offset}`);
    setTableData(data);
  };

  useEffect(() => {
    getDataFromServer();
  }, [searchParams]);

  const editUpdateData = (data: PersonData | null) => {
    setErrorInfo(null);
    setUpdateData(data);
  };

  const changeUpdateData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasChanges(true);
    setUpdateData((prevData) => ({
      ...(prevData as PersonData),
      [event.target.name]: event.target.value,
    }));
  };

  const applyUpdateData = async (data: PersonData) => {
    try {
      if (!hasChanges) {
        toast.error('No changes');
        return;
      }
      const updateInfo = await updatePersonData(data);

      if (updateInfo.id) {
        toast.success('Person updated');
        setErrorInfo(null);
        setUpdateData(null);
        getDataFromServer();
      } else {
        setErrorInfo(updateInfo);
      }
    } catch (err) {
      console.log(err);

      return;
    }
  };

  return (
    <main>
      <div>
        <Toaster />
      </div>
      <table className="table mt-5 container is-fullwidth">
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
            />
          ))}
        </tbody>
      </table>
      <Pagination count={tableData.count} />
      <Modal
        data={updateData}
        editUpdateData={editUpdateData}
        applyUpdateData={applyUpdateData}
        changeUpdateData={changeUpdateData}
        errorInfo={errorInfo}
      />
      <div className="is-flex is-justify-content-center"></div>
    </main>
  );
};

export default withAuth(Home);
