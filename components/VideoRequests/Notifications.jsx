import Request from "./Request";

const Notifications = ({ requests }) => {
  return (
    <div>
      {requests.map((request) => {
        return <Request key={request.id} request={request} />;
      })}
    </div>
  );
};

export default Notifications;
