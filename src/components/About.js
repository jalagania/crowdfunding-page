import Button from "./Button";

function About(props) {
  return (
    <section className="flex flex-col gap-12 rounded-2xl border-2 border-solid border-gray-100 bg-white p-14 text-left leading-relaxed phone:p-8">
      <h2 className="text-3xl font-bold">About this project</h2>
      <p className="text-[15px] text-grayDark">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="text-[15px] text-grayDark">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div className="flex flex-col gap-8">
        {props.myData.map((pledge) => {
          if (pledge.buttonText !== "") {
            return (
              <div
                key={pledge.id}
                className={`rounded-xl border-2 border-solid border-gray-200 p-10 ${
                  pledge.left ? "" : "opacity-50"
                }`}
              >
                <div className="flex items-center justify-between phone:flex-col phone:gap-4">
                  <h3 className="text-3xl font-bold">{pledge.name}</h3>
                  <p className="text-[15px] font-semibold text-cyanLight">
                    {`Pledge $${pledge.amount} or more`}
                  </p>
                </div>
                <p className="my-8 text-[15px] text-grayDark">{pledge.text}</p>
                <div className="flex items-center justify-between phone:flex-col phone:gap-4">
                  <div className="flex items-center gap-4">
                    <p className="text-4xl font-bold">{pledge.left}</p>
                    <p className="text-[15px] text-grayDark">left</p>
                  </div>
                  <Button
                    name={pledge.buttonText}
                    fontSize="text-[14px]"
                    handleButton={() => {
                      if (pledge.left !== 0) {
                        props.setSelected(pledge.name);
                        props.setInputValue(pledge.amount);
                        props.setShowModalSelect(true);
                      }
                    }}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}

export default About;
