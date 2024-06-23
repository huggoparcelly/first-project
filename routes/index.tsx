import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(0);
  
  return (
    <div class=" mx-auto bg-[#86efac]">
      <h1>Header</h1>
      <Counter count={count}/>
      <h1>Footer</h1>
    </div>
  );
}
