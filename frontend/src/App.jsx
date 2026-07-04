import Home from "./pages/Home";

function App() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h1 className="text-center mb-4">📋 TaskBoard</h1>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;