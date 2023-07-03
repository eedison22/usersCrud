import React from 'react';
import Background from '../img/image.jpg';

const UserList = ({ userList, setForm, selectUser, getUsers, getWarning }) => {
  const orderList = userList.sort((a, b) => a.first_name.localeCompare(b.first_name));

  return (
    <div className="w-full">
      <div className="w-full h-28 flex flex-row flex-wrap items-center justify-around bg-white/30 shadow-lg shadow-black">
        <h1 className="w-full text-center text-4xl font-bold text-black">
          Listado de Usuarios
        </h1>
        <p className="font-bold text-black text-xl">
          <strong>Usuarios Registrados: </strong>
          {userList.length}
        </p>
        <button
          className="w-36 h-10 flex items-center justify-center bg-blue-500 text-black shadow-lg shadow-black hover:bg-blue-700 hover:transform hover:scale-110 hover:text-white hover:border-white font-bold rounded-lg border-2 border-black"
          onClick={() => setForm(true)}
        >
          <span className="text-2xl mr-1">+</span>Nuevo Usuario
        </button>
      </div>
      <div className="flex w-full flex-row flex-wrap gap-8 justify-evenly px-4 py-4">
        {orderList.map((user) => (
          <div
            className="flex flex-col items-center justify-between p-4 flex-wrap w-80 h-60 bg-white/20 shadow-lg shadow-black rounded-lg my-10 gap-0 sm:h-72 sm:gap-2 md:w-80 lg:w-80 hover:shadow-xl hover:shadow-white"
            key={user.id}
          >
            <h4 className="w-full text-center py-2 border-b-2 border-black font-black shadow-lg shadow-black rounded-lg underline underline-offset-2">
              {user.first_name}, {user.last_name}
            </h4>
            <div>
              <p className="font-medium">
                <strong className="underline-offset-2 underline font-bold">
                  Email:{' '}
                </strong>{' '}
                <br />
                {user.email}
              </p>
              <p className="font-medium">
                <strong className="underline-offset-2 underline font-bold">
                  Fecha de Nacimiento:{' '}
                </strong>{' '}
                <br />
                {user.birthday}
              </p>
            </div>
            <div className="flex items-center justify-center flex-row gap-20 rounded-md sm:gap-24 sm:mt-2">
              <button
                className="bg-blue-500 text-black flex items-center justify-center w-10 h-10 border-2 border-black rounded-md shadow-md shadow-black hover:bg-blue-700  hover:transform hover:scale-110 hover:text-white hover:border-white"
                onClick={() => selectUser(user)}
              >
                <i className="bx bxs-edit-alt bx-sm"></i>
              </button>
              <button
                className="bg-red-500 text-black flex items-center justify-center w-10 h-10 border-2 border-black rounded-md shadow-md shadow-black hover:bg-red-700 hover:transform hover:scale-110 hover:text-white hover:border-white"
                onClick={() => getWarning(user)}
              >
                <i className="bx bx-trash bx-sm"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
