import Countdown from "../islands/Countdown.tsx";

export default function Page() {
    const date = new Date();

    date.setMinutes(date.getMinutes() + 1);

    return(
        <p>
            The big event is happening <Countdown target={date.toISOString()} />
        </p>
    )
}