import RecordList from './RerordList'

import useFetchRecords from '../hooks/useFetchRecords'

const PhoneBookRecords = () => {
    const { data, loading, error } = useFetchRecords();
  
    if (error) {
      return <h1 style={{ color: "red" }}>We have a problem</h1>;
    }
  
    return <>{loading ? <p>loading...</p> : <RecordList recordList={data} />}</>;
  };

export default PhoneBookRecords