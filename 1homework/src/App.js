import './App.css';

function Header () {
  return (
      <>
          <Title/>
      </>
  )
}

function Content () {
  return (
      <>
          <Title/>
      </>
  )
}


function Footer () {
  return (
      <>
          <Title/>
      </>
  )
}

function Title () {
  return <h2>Title</h2>
}

function App() {
  return (
    <div className="App">
          <Header/>
          <Content/>
          <Footer/>
    </div>
  );
}

export default App;
