function Stats(props) {
  return (
    <section className="rounded-2xl border-2 border-solid border-gray-100 bg-white p-14">
      <div className="flex justify-between phone:flex-col phone:items-center">
        <div className="w-[33%] text-left phone:w-auto phone:py-8 phone:text-center">
          <p className="mb-4 text-5xl font-bold">{`$${props.money.toLocaleString()}`}</p>
          <p className="font-medium text-grayDark">of $100,000 backed</p>
        </div>
        <div className="w-[33%] border-x border-solid border-gray-300 pl-16 text-left phone:w-auto phone:border-y phone:border-x-0 phone:py-8 phone:pl-0 phone:text-center">
          <p className="mb-4 text-5xl font-bold">
            {props.backers.toLocaleString()}
          </p>
          <p className="font-medium text-grayDark">total backers</p>
        </div>
        <div className="w-[33%] pl-16 text-left phone:w-auto phone:py-8 phone:pl-0 phone:text-center">
          <p className="mb-4  text-5xl font-bold">56</p>
          <p className="font-medium text-grayDark">days left</p>
        </div>
      </div>
      <div className="mt-14 h-5 w-full rounded-full bg-grayLight">
        <div
          className={`h-5 rounded-full bg-cyanLight`}
          style={{
            width:
              props.money > 100000
                ? "100%"
                : (props.money * 100) / 100000 + "%",
          }}
        ></div>
      </div>
    </section>
  );
}

export default Stats;
