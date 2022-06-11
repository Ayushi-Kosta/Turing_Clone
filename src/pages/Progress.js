import "./progress_bar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

// <li class="active"><span>Welcome</span><span> to Turing</span></li>
// <li class="active"><span>work experience</span><span> survey</span></li>
// <li class="active"><span>Pass your</span><span> 1st test</span></li>
// <li><span>Unlock the</span><span> coding challenge</span></li>

export default function App() {
  return (
    <>
    <div class="container">
          <ul class="progressbar">

          <li class="active"><span>Welcome</span></li>
          <li class="active"><span>Survey</span></li>
          <li class="active"><span>Pass</span><span> test</span></li>
          <li><span>Unlock</span></li>
        </ul>
      </div>
    </>
  );
}
