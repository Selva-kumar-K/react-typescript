import { useState } from "react";

export default function Appointment() {
  const [isChecked, SetIsChecked] = useState<null | boolean>(null);
  const [message, SetMessage] = useState("");

  const canSubmit = typeof isChecked === "boolean";

  const handleSubmit = () => {
    SetIsChecked(null);
    SetMessage("");
    console.log(isChecked, message);
  };
  return (
    <div className="m-10 max-w-[380px] bg-slate-100 p-5 rounded-xl">
      <h1 className="text-2xl font-semibold">Incoming Appointment</h1>

      <p>From : Selva kumar</p>
      <p>Date : 2025-28-3</p>

      <fieldset className="flex flex-col gap-3 border p-4 my-3">
        <legend>Appointment Response</legend>

        <div className="flex gap-3">
          <label htmlFor="accept">
            <input
              type="radio"
              name="accept"
              id="accept"
              checked={isChecked === true}
              onChange={() => SetIsChecked(true)}
            />
            Accept
          </label>

          <label htmlFor="decline">
            <input
              type="radio"
              name="accept"
              id="decline"
              checked={isChecked === false}
              onChange={() => SetIsChecked(false)}
            />
            Decline
          </label>
        </div>

        <h1>Optional Message: </h1>
        <input
          type="text"
          className="border max-w-max"
          value={message}
          onChange={(e) => SetMessage(e.target.value)}
        />
        <button
          className="border rounded-md bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          disabled={!canSubmit}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </fieldset>
    </div>
  );
}
