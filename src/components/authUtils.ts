export const verifyIdToken = async (loginWithGoogle: any) => {
  try {
    const { user, details } = await loginWithGoogle();
    const token = await user?.getIdToken();

    console.log("token", token);
    console.log("details", details);
    console.log("username", details?.profile?.name);
    console.log("user", user);

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // JSON形式のデータを送信することを明示
    };

    const userDetails = {
      username: details?.profile?.name, // Railsコントローラーが期待するキーに変更
    }

    const response = await fetch("http://localhost:3000/api/v1/auth", {
      method: "POST",
      headers,
      body: JSON.stringify(userDetails), // データをJSON形式に変換して送信
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(errorMessage);
    }
  } catch (err: any) {
    console.error(err.toString());
  }
};
