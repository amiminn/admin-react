import Layout from "./components/layout";
import Dropdown from "./dropdown";
export default function App() {
  return (
    <>
      <Layout>
        <div className="flex justify-center">
          <Dropdown></Dropdown>
        </div>
      </Layout>
    </>
  );
}
