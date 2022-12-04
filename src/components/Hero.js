import { useState } from "react";
import logo from "../images/logo-mastercraft.svg";
import bookmark from "../images/icon-bookmark.svg";
import Button from "./Button";

function Hero(props) {
  const [bookmarked, setBookmarked] = useState(false);

  function handleButton() {
    props.setSelected("");
    props.setShowModalSelect(true);
  }

  function handleBookmark() {
    setBookmarked(!bookmarked);
  }

  return (
    <section className="rounded-2xl border-2 border-solid border-gray-100 bg-white p-14">
      <img className="mx-auto -mt-[65px]" src={logo} alt="logo" />
      <h1 className="mt-8 text-[26px] font-bold">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="mt-6 font-medium text-grayDark">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="mt-14 flex items-center justify-between">
        <Button
          name="Back this project"
          fontSize="text-[16px]"
          handleButton={handleButton}
        />
        <div className="flex cursor-pointer" onClick={handleBookmark}>
          <img
            className={`z-10 ${bookmarked ? "" : "grayscale"}`}
            src={bookmark}
            alt="bookmark"
          />
          <p
            className={`-ml-20 rounded-full bg-gray-100 py-6 pl-[65px] pr-10 font-bold phone:hidden ${
              bookmarked ? "text-cyanDark" : "text-stone-800"
            }`}
          >
            {bookmarked ? "Bookmarked" : "Bookmark"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
