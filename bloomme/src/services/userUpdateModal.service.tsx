interface UserData {
  username: string;
  password: string;
  age: number;
  country: string;
  assistant_name: string;
}

const userUpdateModal = async({
  username,
  password,
  age,
  country,
  assistant_name,
}: UserData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `https://bloomme-backend.onrender.com/api/user/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username,
          password,
          age,
          country,
          assistant_name,
        }),
      },
    );
    if (!response.ok) {
      throw new Error("Error al actualizar el usuario");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Error inesperado";
    throw new Error(errorMessage);
  }
};

export default userUpdateModal;
