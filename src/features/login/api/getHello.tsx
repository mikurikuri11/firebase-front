export const getHello = async () => {
  const res = await fetch('http://localhost:3000/api/v1/hello',
    { cache: 'no-store' }
  );
  const json = await res.json();
  return json;
}