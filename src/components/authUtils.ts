import axios from "axios";

export const verifyIdToken = async (loginWithGoogle: any) => {
  const user = await loginWithGoogle();
  const token = await user?.getIdToken();

  const config = {
    headers: { authorization: `Bearer ${token}` },
  };

  try {
    await axios.post("/auth", null, config);
  } catch (err) {
    let message;
    if (axios.isAxiosError(err) && err.response) {
      console.error(err.response.data.message);
    } else {
      message = String(err);
      console.error(message);
    }
  }
};
