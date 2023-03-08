import { useSelector } from "react-redux";
import { userSelector } from "../store/users/user.selector";
import { User } from "../types/types";
import axios from "axios";
type props = {
  fetchUser: any;
};
const Dashboard = (props: props) => {
  const user = useSelector(userSelector);

  const deleteUser = async (id: string) => {
    const res = await axios.delete(
      `https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`
    );
  };

  const updateUser = async (id: string) => {
    const res = await axios.patch(
      `https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`,
      { firstName: "test23" }
    );
  };

  return (
    <div>
      <nav className="px-2 bg-white h-9 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <span className="text-white text-2xl">DashBoard</span>
      </nav>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      FirstName
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      LastName
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      PhoneNumber
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      Edit
                    </th>
                    <th
                      scope="col"
                      className="border-r px-6 py-4 dark:border-neutral-500"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((user: User) => {
                    return (
                      <>
                        <tr className="border-b dark:border-neutral-500">
                          <td  className="whitespace-nowrap border-r px-6 py-4  dark:border-neutral-500">
                            {user.firstName}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4  dark:border-neutral-500">
                            {user.lastName}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            {user.age}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            {user.phoneNumber}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              id={user.id}
                              onClick={() => {
                                updateUser(user.id || "");
                              }}
                            >
                              Edit
                            </button>
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                              id={user.id}
                              onClick={() => {
                                deleteUser(user.id || "");
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
