import Button from "./Button";
import check from "../images/icon-check.svg";

function ModalThanks(props) {
  function handleButton() {
    props.setShowModalThanks(false);
  }

  return (
    <div className="fixed z-30 flex h-screen w-screen items-center justify-center">
      <div className="z-30 w-[500px] rounded-2xl bg-white p-16 text-center phone:w-[90vw]">
        <img className="mx-auto mb-16" src={check} alt="check" />
        <h3 className="mb-4 text-4xl font-bold">Thanks for your support!</h3>
        <p className="mb-12 text-[15px] leading-relaxed text-grayDark">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <Button
          name="Got it!"
          fontSize="text-[14px]"
          handleButton={handleButton}
        />
      </div>
      <div
        className="fixed h-screen w-screen bg-black opacity-70"
        onClick={handleButton}
      ></div>
    </div>
  );
}

export default ModalThanks;
