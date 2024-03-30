import { testApi } from "@/api/servises/test";

function App() {
  const { data, isLoading } = testApi.useGetTestQuery();

  console.log(isLoading);

  console.log(data);

  if (isLoading) return <>loading</>;

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
