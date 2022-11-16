import { Navigate } from 'react-router-dom';

export default function (props) {
  let target = props.target ? props.target : '/';

  return <Navigate to={target} />;
}
