import Button from "./Button";
import close from "../images/icon-close-modal.svg";

function ModalSelect(props) {
  function handleInputChange(event) {
    props.setInputValue(event.target.value);
  }

  return (
    <div className="fixed z-30 flex h-screen w-screen items-center justify-center">
      <div className="z-30 h-[90%] max-w-6xl overflow-y-scroll rounded-2xl bg-white p-12 phone:w-[90vw] phone:p-10">
        <img
          className="ml-auto flex cursor-pointer hover:drop-shadow-[0_0_0_cyan]"
          src={close}
          alt="close"
          onClick={() => props.setShowModalSelect(false)}
        />
        <h3 className="mb-4 text-4xl font-bold">Back this project</h3>
        <p className="mb-12 text-[15px] leading-relaxed text-grayDark">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className="flex flex-col gap-8">
          {props.myData.map((pledge, index) => {
            return (
              <div
                key={pledge.id}
                className={`rounded-xl border-2 border-solid ${
                  props.selected === pledge.name
                    ? "border-cyanLight"
                    : "border-gray-200"
                } p-10 phone:px-4 phone:py-8 ${
                  pledge.left !== 0 ? "" : "opacity-50"
                }`}
              >
                <div className="flex gap-8">
                  <div>
                    <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full border-2 border-solid border-gray-200">
                      {props.selected === pledge.name && (
                        <div className="h-[12px] w-[12px] rounded-full bg-cyanLight"></div>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-8 phone:flex-col phone:items-start phone:gap-4">
                      <h3
                        className={`text-3xl font-bold phone:text-[18px] ${
                          pledge.left === 0
                            ? ""
                            : "cursor-pointer hover:text-cyanLight"
                        }`}
                        onClick={() => {
                          if (pledge.left !== 0) {
                            props.setSelected(pledge.name);
                            props.setInputValue(pledge.amount);
                          }
                        }}
                      >
                        {pledge.name}
                      </h3>
                      {pledge.amount !== "" && (
                        <p className="text-[15px] font-semibold text-cyanLight">
                          {`Pledge $${pledge.amount} or more`}
                        </p>
                      )}
                      {pledge.left !== "" && (
                        <div className="ml-auto flex items-center gap-4 phone:ml-0">
                          <p className="text-4xl font-bold">{pledge.left}</p>
                          <p className="text-[15px] text-grayDark">left</p>
                        </div>
                      )}
                    </div>
                    <p className="mt-8 text-[15px] text-grayDark phone:-ml-16">
                      {pledge.text}
                    </p>
                  </div>
                </div>
                {props.selected === pledge.name && (
                  <div className="mt-10 flex items-center gap-8 border-t-2 border-solid border-gray-200 pt-8 phone:relative phone:pt-20">
                    <p
                      className={`text-[15px] text-grayDark phone:absolute phone:top-[15px] phone:left-[75px] ${
                        pledge.amount === "" ? "invisible" : ""
                      }`}
                    >
                      Enter your pledge
                    </p>
                    <input
                      className={`ml-auto w-48 self-stretch rounded-full border-2 border-solid border-gray-200 px-6 text-center text-[14px] font-bold outline-none focus:border-cyanLight ${
                        pledge.amount === "" ? "invisible" : ""
                      }`}
                      type="number"
                      min={25}
                      value={props.inputValue}
                      onChange={handleInputChange}
                    />
                    <Button
                      name="Continue"
                      fontSize="text-[14px]"
                      handleButton={() => {
                        props.setShowModalSelect(false);
                        props.setShowModalThanks(true);
                        props.calcMoneyAndBackers();
                        if (pledge.left > 0) {
                          props.setMyData((prevState) => {
                            return [
                              ...prevState.slice(0, index),
                              { ...prevState[index], left: pledge.left - 1 },
                              ...prevState.slice(index + 1),
                            ];
                          });
                        }
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="fixed h-screen w-screen bg-black opacity-70"
        onClick={() => props.setShowModalSelect(false)}
      ></div>
    </div>
  );
}

export default ModalSelect;
