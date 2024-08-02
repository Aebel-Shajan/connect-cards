import { useParams } from "react-router-dom";

const PersonalPage = () => {
  let { userId } = useParams();
  return (
    <div>
      <h1>{userId}&apos;s Personal Page</h1>
    </div>
  );
};

export default PersonalPage;
