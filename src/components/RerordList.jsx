import React from "react";
import PhoneCard from "./PhoneCard";

import { AuthContext } from "../providers/authContex";

import "../scss/recordList.scss";

import useDeleteRecords from "../hooks/useDeleteRecords";
import useEdithRecords from "../hooks/useEditRecords";

const RecordList = (props) => {
  const authCtx = React.useContext(AuthContext)

  const { delRecord } = useDeleteRecords();
  const { editRecord } = useEdithRecords();
  const [editIndex, setEditIndex] = React.useState(null);
  const [newData, setNewData] = React.useState({});
  

  const deleteHandler = (id) => {
    delRecord(id);
    setEditIndex(null);
  };

  const editHandler = (id) => {
    setEditIndex(id);
  };

  const saveHandler = (id, newData) => {
    editRecord(id, newData);
    setEditIndex(null);
  };

  const cancelEdit = () => {
    setEditIndex(null);
  };

  const handlerLogout = () => {
    authCtx.doLogOut();
  }

  return (
    <div className="item-card-wraper">
      {props.recordList?.data.map((record, index) => (
        <div className="items" key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                defaultValue={record.name}
                onChange={(e) =>
                  setNewData({ ...newData, name: e.target.value })
                }
              />

              <input
                type="text"
                defaultValue={record.surname}
                onChange={(e) =>
                  setNewData({ ...newData, surname: e.target.value })
                }
              />

              <input
                type="text"
                defaultValue={record.phone}
                onChange={(e) =>
                  setNewData({ ...newData, phone: e.target.value })
                }
              />
              <button onClick={() => saveHandler(index, newData)}>Save</button>
              <button onClick={() => cancelEdit(index, newData)}>Cancel</button>
              <button onClick={() => deleteHandler(index)}>Delete</button>
            </>
          ) : (
            <>
              <PhoneCard>
                <b>Name:</b> {record.name}; <b>Surname:</b> {record.surname}; <b>Phone: </b> {record.phone};
              </PhoneCard>
              <button onClick={() => editHandler(index)}>Edit</button>
              <button onClick={() => deleteHandler(index)}>Delete</button>
            </>
          )}
        </div>
      ))}
      <button onClick={handlerLogout}>LogOut</button>
    </div>
  );
};

export default RecordList;
