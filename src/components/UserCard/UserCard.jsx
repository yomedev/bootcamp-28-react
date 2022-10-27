import { useSelector } from "react-redux";
import { Status } from "../../constants/fetch-status";


export const UserCard = () => {
  const {status, data} = useSelector(state => state.profile)  

  if (status === Status.LOADING || status === Status.IDLE) {
    return <p>Loading...</p>
  }

  if (status === Status.ERROR) {
    return <p>Error</p>
  }

  return (
    <div className="list-group-item list-group-item-action py-3 mb-4">
      <div className="d-flex w-100 align-items-center">
        <img
          alt=""
          width="80px"
          height="80px"
          className="d-block"
          src={data.avatar || '/user.png'}
          style={{ borderRadius: '50%', boxSizing: 'border-box' }}
        />
        <div className="ms-3 d-flex flex-column">
          <strong className="mb-1">
            {data.first_name} {data.last_name}
          </strong>
          <small className="text-muted">{data.email}</small>
        </div>
      </div>
    </div>
  );
};