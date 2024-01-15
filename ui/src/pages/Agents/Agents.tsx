import { getAgents } from "../../features/agents/agentsSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Filter from "../../components/Filter";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { loading, error, agents } = useAppSelector((state) => state.agents);
  useEffect(() => {
    dispatch(getAgents());
    console.log(agents);
    
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {!!agents.length && (
        <div className="h-full flex items-center justify-center">
          <div className="agents-view-container h-full w-full px-[30px] min-[1441px]:px-0">
            <Filter />
            {/* <Table agents={agents}/> */}

            <div className="agents-cards">
              {agents.map((agent) => {
                // return <DeviceCard key={device._id} device={device} />;
                return JSON.stringify(agent);
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
