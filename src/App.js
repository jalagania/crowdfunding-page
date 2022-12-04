import { useState } from "react";
import { data } from "./data";
import ModalThanks from "./components/ModalThanks";
import ModalSelect from "./components/ModalSelect";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Attribution from "./components/Attribution";

function App() {
  const [myData, setMyData] = useState(data);
  const [showModalThanks, setShowModalThanks] = useState(false);
  const [showModalSelect, setShowModalSelect] = useState(false);
  const [selected, setSelected] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [backers, setBackers] = useState(5007);
  const [money, setMoney] = useState(89914);

  function calcMoneyAndBackers() {
    setMoney(money + Number(inputValue));
    setBackers(backers + 1);
  }

  return (
    <div>
      {showModalThanks && (
        <ModalThanks setShowModalThanks={setShowModalThanks} />
      )}
      {showModalSelect && (
        <ModalSelect
          myData={myData}
          setMyData={setMyData}
          setSelected={setSelected}
          selected={selected}
          setShowModalSelect={setShowModalSelect}
          setShowModalThanks={setShowModalThanks}
          inputValue={inputValue}
          setInputValue={setInputValue}
          calcMoneyAndBackers={calcMoneyAndBackers}
        />
      )}
      <Header />
      <main className="mx-auto mt-80 flex max-w-6xl flex-col gap-8 text-center phone:px-4">
        <Hero
          setSelected={setSelected}
          setShowModalSelect={setShowModalSelect}
        />
        <Stats money={money} backers={backers} />
        <About
          myData={myData}
          setSelected={setSelected}
          setShowModalSelect={setShowModalSelect}
          setInputValue={setInputValue}
        />
      </main>
      <Attribution />
    </div>
  );
}

export default App;
